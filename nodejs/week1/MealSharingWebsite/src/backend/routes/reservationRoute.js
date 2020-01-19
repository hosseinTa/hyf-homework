const express = require("express");
const app = express.Router();
const [filterCheapMeals , filterHighCapacityMeals , giveOneRandom] = require('./mealsEvaluator.js');
const addReviews = require('./addReviews.js')
const meals = require('../data/meals.json');
const reviews = require('../data/reviews.json');


app.get("/" , (req , res) => {
    console.log('reservation page is called');
    const randomReservation = giveOneRandom(reservations);
    res.send(randomReservation);
}) 

module.exports = app;