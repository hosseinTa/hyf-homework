const express = require("express");
const app = express();
const router = express.Router();
const pool = require("../database");

router.post("/", (request, response) => {

  console.log('in postmeal')

  console.log(request.query);

  const mealtitle = request.query.mealtitle;
  const queryText = `INSERT INTO meal (
      title,
      description,
      location,
      event_time,
      max_reservation,
      price,
      created_date)
    Values (
      ${mealtitle},
      'vv',
      'gg',
      '2019-12-13 15:00:00',
      5,
      10,
      '2019-11-30')`

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
