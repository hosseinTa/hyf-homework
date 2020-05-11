const express = require("express");
const app = express();
const router = express.Router();
const pool = require("../database");

router.post("/", (request, response) => {

  console.log('how to get from Body JSON')

  console.log(request.body);

  const mealtitle = request.body.mealtitle;
  const description = request.body.description;
  const location = request.body.location;
  const event_time = request.body.event_time;
  const max_reservation = request.body.max_reservation;
  const price = request.body.price;
  const created_date = request.body.created_date;

  const queryText = `INSERT INTO meal (
    title,
    description,
    location,
    event_time,
    max_reservation,
    price,
    created_date)
  Values (
    '${mealtitle}',
    '${description}',
    '${location}',
    '${event_time}',
    '${max_reservation}',
    '${price}',
    '${created_date}')`

  console.log(queryText);
  pool.query(queryText, function (error, results, fields) {
    if (error) {
      // console.log('error in getting data from Database in /api/postMeals.js')
      response.send('error in getting data from Database in /api/postMeals.js')
      return;
    }
    // console.log(results.query)

    response.send('Meal is successfully added to the Data Base.')
  });
});

module.exports = router;
