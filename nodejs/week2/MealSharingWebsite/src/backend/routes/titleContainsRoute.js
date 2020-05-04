const express = require("express");
const app = express.Router();

const [filterCheapMeals , filterHighCapacityMeals , giveOneRandom] = require('./mealsEvaluator.js');

const addReviews = require('./addReviews.js')

const meals = require('../data/meals.json');
const reviews = require('../data/reviews.json');
const reservations = require('../data/reservations.json');

app.get("/api/meals?" , (req , res)=>{
    // res.send('ku' + req.query.title);
    if(req.query.title)         res.send(meals.filter ( meals => meals.title.toLowerCase().includes(req.query.title) ));
    else if(req.query.createdafter)  res.send(meals.filter ( meals => meals.createdAt >= req.query.createdafter));
    else if(req.query.limit)         res.send(meals.slice  (0 , Math.min(Number(req.query.limit) , meals.length )));
    else res.send('Invalid request, include either a title, limit or date')
});

module.exports = app;