const express = require("express");
const app = express();
const router = express.Router();
const pool = require("../database");

router.get("/", (request, response) => {
  
  console.log('in getmeal')
  pool.query("SELECT * FROM meal", function (error, results, fields) {
    
    if (error) {
      console.log('error in getting data from Database in /api/getMeals.js')
      response.send('error in getting data from Database in /api/getMeals.js')
    }
    
    console.log(results)
    response.send(results)
  });
});

module.exports = router;
