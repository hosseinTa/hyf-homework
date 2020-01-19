const express = require("express");
const app = express.Router();
const [filterCheapMeals , filterHighCapacityMeals , giveOneRandom] = require('./mealsEvaluator.js');
const addReviews = require('./addReviews.js')
const meals = require('../data/meals.json');
const reviews = require('../data/reviews.json');

app.get("/" , (req , res) => {
    console.log('reservations page is called');
    res.send(reservations);
})

module.exports = app;