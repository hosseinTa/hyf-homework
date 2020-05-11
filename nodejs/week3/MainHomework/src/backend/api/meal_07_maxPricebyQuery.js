const express = require("express");
const app = express();
const router = express.Router();
const pool = require("../database");

router.get("/", (request, response) => {

  console.log('maxPrice')
  response.send('maxPrice')
  // const maxPrice = request.query.maxPrice;

  // const queryText = `SELECT * FROM meal WHERE pice <'${maxPrice}'`

  // console.log(queryText);
  // pool.query(queryText, function (error, results, fields) {
  //   if (error) {
  //     // console.log('error in getting data from Database in /api/postMeals.js')
  //     response.send('error in getting data from Database in /api/postMeals.js')
  //     return;
  //   }
  //   // console.log(results.query)

  //   response.send(results)
  // });
});

module.exports = router;
