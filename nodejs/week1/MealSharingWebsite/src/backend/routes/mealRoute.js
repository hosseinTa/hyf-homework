const express = require("express");
const app = express.Router();
const [filterCheapMeals , filterHighCapacityMeals , giveOneRandom] = require('./mealsEvaluator.js');
const addReviews = require('./addReviews.js')
const meals = require('../data/meals.json');
const reviews = require('../data/reviews.json');

app.get("/" , (req , res) => {
    console.log('random-meal page is called');
    const randomMeals = giveOneRandom(meals);
    const randomMealsWithReviews = addReviews(randomMeals , reviews);
    res.send(randomMealsWithReviews);
})

module.exports = app;