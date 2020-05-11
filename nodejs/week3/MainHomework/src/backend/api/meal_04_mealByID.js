const express = require("express");
const app = express();
const router = express.Router({ mergeParams: true });
const pool = require("../database");

router.get("/", (request, response) => {

  pool.query(`SELECT * FROM meal WHERE id = ${request.params.id}`, function (error, results, fields) {
    if (error) {

      response.send(error)
      return;
    }
    if(results.length == 0 ) response.send("Meal with such ID doesn't exist.")
    response.send(results[0])
  });
});

module.exports = router;
