const express = require("express");
const app = express();
const router = express.Router({ mergeParams: true });
const pool = require("../database");

router.put("/", (request, response) => {

  pool.query(`SELECT * FROM meal WHERE id = ${request.params.id}`, function (error, results, fields) {
    if (error) {

      response.send(error)
      return;
    }

    response.send(results[0])
  });
});

module.exports = router;
