const express = require("express");
const app = express.Router();

const meals = require('../data/meals.json');
const reviews = require('../data/reviews.json');
const addReviews = require('./addReviews.js')

app.get("/" , (req , res) => {
    console.log('meals page is called_From new folder');
    const printout = addReviews(meals , reviews);
    res.send(printout);
})

module.exports =  app;