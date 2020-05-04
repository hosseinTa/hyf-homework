const express = require("express");
const app = express.Router();

const [filterCheapMeals , filterHighCapacityMeals , giveOneRandom] = require('./mealsEvaluator.js');

const addReviews = require('./addReviews.js')

const meals = require('../data/meals.json');
const reviews = require('../data/reviews.json');
const reservations = require('../data/reservations.json');

app.get("/maxPriceRoute/:price" , (req , res)=>{
    res.send(meals.filter(meals => meals.price <= (req.params.price ) ));
});

module.exports = app;