const express = require("express");
const app = express();
const router = express.Router();
const pool = require("../database");

router.post("/", (request, response) => {

  console.log('in postmeal')

  console.log(request.query);

  const mealtitle = request.query.mealtitle;
  const description = request.query.description;
  const location = request.query.location;
  const event_time = request.query.event_time;
  const max_reservation = request.query.max_reservation;
  const price = request.query.price;
  const created_date = request.query.created_date;

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

    response.send('Meal is added successfullly')
  });
});

module.exports = router;
