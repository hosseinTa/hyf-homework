const express = require("express");
const app = express();
const router = express.Router();
const pool = require("../database");

router.post("/", (request, response) => {

  console.log(request.body)

  const number_of_guests = request.body.number_of_guests;
  const meal_id = request.body.meal_id;
  const create_date = request.body.create_date;

  const queryText = `INSERT INTO reservation (
      number_of_guests,
      meal_id,
      create_date)
    Values (
      ${number_of_guests},
      ${meal_id},
      '${create_date}')`

  console.log(queryText);
  pool.query(queryText, function (error, results, fields) {
    if (error) {
      // console.log('error in getting data from Database in /api/postMeals.js')
      response.send('error in adding reservation to the Database.' + JSON.stringify(error))
      return;
    }
    // console.log(results.query)

    response.send('reservation is added successfullly')
  });
});

module.exports = router;
