const express = require('express')
var router = express.Router()
const User = require('../models/user.js')
const WrapAsync = require('../utils/ErrorHandle.js')
const passport = require('passport')

router.get('/register', (req, res) => {
    res.render('user/register')
})

// register logic
router.post('/register', WrapAsync(async (req, res) => {
    try {
        const { username, email, password } = req.body
        const newUser = new User({ username, email })
        const saveUser = await User.register(newUser, password)
        req.login(saveUser, function (err) {
            if (err) { return next(err); }
            req.flash('success', 'successfully registered');
            res.redirect('/campgrounds')
        });

    }
    catch (e) {
        req.flash('error', e.message)
        res.redirect('/register')
    }

}))

// login logic
router.get('/login', (req, res) => {
    res.render('user/login')
})

router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), (req, res) => {
    req.flash('success', 'welcome back!!')
    const redirectUrl = req.session.returnTo || '/campgrounds'
    delete req.session.returnTo
    res.redirect(redirectUrl)
})

router.get('/logout', (req, res) => {
    req.logout()
    req.flash('success', 'goodbye!!')
    res.redirect('/campgrounds')
})

module.exports = router

