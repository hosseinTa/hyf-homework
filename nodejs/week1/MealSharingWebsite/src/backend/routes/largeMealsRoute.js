
const express = require("express");
const [filterCheapMeals , filterHighCapacityMeals , giveOneRandom] = require('./mealsEvaluator.js');
const app = express.Router();

const meals = require('../data/meals.json');
const reviews = require('../data/reviews.json');
const addReviews = require('./addReviews.js')

app.get("/" , (req , res) => {
    console.log('large-meals page is called- From routes folder');
    const highCapacityMeals = filterHighCapacityMeals(meals);
    const highCapacityMealsWithReviews = addReviews(highCapacityMeals , reviews);
    res.send(highCapacityMealsWithReviews);
})

module.exports = app;