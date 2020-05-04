const express = require("express");
const app = express.Router();

const [filterCheapMeals , filterHighCapacityMeals , giveOneRandom] = require('./mealsEvaluator.js');

const addReviews = require('./addReviews.js')

const meals = require('../data/meals.json');
const reviews = require('../data/reviews.json');
const reservations = require('../data/reservations.json');

app.get("/reservationsid/:id" , (req , res)=>{
    console.log((req.params.id));
    res.send(reservations.filter(reservations => reservations.id === Number( req.params.id ) ));
});

module.exports = app;