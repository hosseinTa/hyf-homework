const express = require("express");
const app = express();
const router = express.Router({ mergeParams: true });
const pool = require("../database");

router.delete("/", (request, response) => {

  console.log('dellete Reservation' , request.params.id)

  pool.query(`DELETE FROM reservation WHERE id = ${request.params.id}`, function (error, results, fields) {
    if (error) {
      response.send(error)
      return;
    }

    response.send((results.affectedRows === 1) ? `Reservation id ${request.params.id} deleted sucsessfully.` : `Error, ${JSON.stringify(results)}`)
  });
});

module.exports = router;
