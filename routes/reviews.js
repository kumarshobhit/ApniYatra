const express = require('express')
var router = express.Router({ mergeParams: true })
const Review = require('../models/review.js')
const CampGround = require('../models/campground.js');
const { reviewSchema } = require('../schemas.js');
const AppError = require('../utils/AppError')
const WrapAsync = require('../utils/ErrorHandle.js')
const { validateReview, isLoggedIn } = require('../middleware');

// to submit a new review for a campgorund
router.post('/', isLoggedIn, validateReview, async (req, res) => {
    const { id } = req.params;
    const camp = await CampGround.findById(id)
    const review = new Review(req.body.review)
    review.author = req.user._id
    camp.reviews.push(review)
    await review.save()
    await camp.save()
    req.flash('success', 'submitted the review')
    res.redirect(`/campgrounds/${id}`)
})

// delete a reiew
router.delete('/:reviewId', isLoggedIn, WrapAsync(async (req, res) => {
    const { id, reviewId } = req.params;
    await CampGround.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    req.flash('success', 'review deleted')
    res.redirect(`/campgrounds/${id}`);
}))


module.exports = router