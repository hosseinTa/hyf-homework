const express = require("express");
const app = express();
const router = express.Router({ mergeParams: true });
const pool = require("../database");

router.put("/", (request, response) => {

  const id = request.params.id

  const number_of_guests = request.body.number_of_guests;
  const meal_id = request.body.meal_id;
  const create_date = request.body.create_date;

  const queryText = `UPDATE reservation 
  SET
    number_of_guests = ${number_of_guests},
    meal_id = ${meal_id},
    create_date = '${create_date}'
  WHERE
    id = ${id};`;

  pool.query(queryText, function (error, results, fields) {
    if (error) {

      response.send(error)
      return;
    }

    response.send((results.affectedRows === 1) ? `Update the reservation id ${id} was sucsessful` : `Error, ${JSON.stringify(results)}`)
  });
});

module.exports = router;
