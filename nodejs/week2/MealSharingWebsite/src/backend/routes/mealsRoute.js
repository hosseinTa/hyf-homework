const express = require("express");
const app = express.Router();

const [filterCheapMeals , filterHighCapacityMeals , giveOneRandom] = require('./mealsEvaluator.js');

const addReviews = require('./addReviews.js')

const meals = require('../data/meals.json');
const reviews = require('../data/reviews.json');
const reservations = require('../data/reservations.json');

app.get("/" , (req , res) => {
    console.log('meals page is called_From new folder');
    const printout = addReviews(meals , reviews);
    res.send(printout);
})

module.exports =  app;