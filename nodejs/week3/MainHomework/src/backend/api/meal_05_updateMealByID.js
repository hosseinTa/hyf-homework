const express = require("express");
const app = express();
const router = express.Router({ mergeParams: true });
const pool = require("../database");

router.put("/", (request, response) => {

  const id = request.params.id

  const mealtitle = request.body.mealtitle;
  const description = request.body.description;
  const location = request.body.location;
  const event_time = request.body.event_time;
  const max_reservation = request.body.max_reservation;
  const price = request.body.price;
  const created_date = request.body.created_date;

  const queryText = `UPDATE meal 
  SET
    title =         '${mealtitle}',
    description =   '${description}',
    location =      '${location}',
    event_time =    '${event_time}',
    max_reservation='${max_reservation}',
    price =         '${price}',
    created_date =  '${created_date}'
  WHERE
    id = ${id};`;

  pool.query(queryText, function (error, results, fields) {
    if (error) {

      response.send(error)
      return;
    }

    response.send((results.affectedRows === 1) ? `Update the meal id ${id} was sucsessful` : `Error, ${JSON.stringify(results)}`)
  });
});

module.exports = router;
