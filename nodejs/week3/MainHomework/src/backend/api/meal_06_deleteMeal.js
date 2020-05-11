const express = require("express");
const app = express();
const router = express.Router({ mergeParams: true });
const pool = require("../database");

router.delete("/", (request, response) => {

  pool.query(`DELETE FROM meal WHERE id = ${request.params.id}`, function (error, results, fields) {
    if (error) {
      response.send(error)
      return;
    }

    response.send((results.affectedRows === 1) ? `Meal id ${request.params.id} deleted sucsessfully.` : `Error, ${JSON.stringify(results)}`)
  });
});

module.exports = router;
