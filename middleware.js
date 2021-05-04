const { campgroundSchema, reviewSchema } = require('./schemas.js');
const CampGround = require('./models/campground.js')
const AppError = require('./utils/AppError')

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl
        req.flash('error', 'You must be signed in first!');
        return res.redirect('/login');
    }
    next();
}

module.exports.validateCampground = (req, res, next) => {
    const { error } = campgroundSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new AppError(400, msg)
    } else {
        next();
    }
}

module.exports.validateReview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new AppError(400, msg)
    } else {
        next();
    }
}

module.exports.isAuth = async (req, res, next) => {
    const { id } = req.params
    const camp2 = await CampGround.findById(id);
    if (!camp2.author.equals(req.user._id)) {
        req.flash('error', 'you dont have permission to do that')
        res.redirect(`/campgrounds/${id}`);
    }
    next()
}