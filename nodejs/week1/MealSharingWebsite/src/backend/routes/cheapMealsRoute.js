
const express = require("express");
const [filterCheapMeals , filterHighCapacityMeals , giveOneRandom] = require('./mealsEvaluator.js');
const app = express.Router();

const meals = require('../data/meals.json');
const reviews = require('../data/reviews.json');
const addReviews = require('./addReviews.js')

app.get("/" , (req , res) => {
    console.log('cheap-meals page is called');
    //res.send('chap-meals from router folder is called');
    const cheapMeals = filterCheapMeals(meals);
    const cheapMealsWithReviews = addReviews(cheapMeals , reviews);
    res.send(cheapMealsWithReviews);
});

module.exports = app;