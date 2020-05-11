const express = require("express");
const app = express();
const router = express.Router();
const pool = require("../database");

router.get("/", (request, response) => {

  let queryText = 'SELECT * FROM meal';
  let limit = 0;
  if (request.query.limit) {
    //remove limit from filters and rise a flag to add limit to queryText after the loop of filters
    limit = request.query.limit
    delete request.query.limit;
  }

  //check if there is any filter. add "WHERE" to the queryText in case there is any filter 
  if (Object.keys(request.query).length > 0) {
    queryText = queryText + ' WHERE ('
    const keys = Object.keys(request.query)

    //add filteres to queryText
    const filterText = keys.map(filter => {
      //add various filters
      if (filter == 'maxPrice') {
        return (`price <= ${request.query.maxPrice} &&`);
      } else if (filter == 'availableReservations') {
        return (`max_reservation > ${request.query.availableReservations} &&`);
      } else if (filter == 'title') {
        return (`title LIKE '%${request.query.title}%' &&`);
      } else if (filter == 'createdAfter') {
        return (`created_date > '${request.query.createdAfter}' &&`)
      }
      // add "&&" in order to be ready for the next filter
    })

    //convert the array of filters to a string with adding single space between each element 
    queryText = queryText + filterText.join(' ')

    //removing excess "&&" from the end of queryText and addin ")" to close the paranthesis of filters
    queryText = queryText.substr(0, queryText.length - 2)
    queryText = queryText + ')'
  }

  if (limit !== 0) queryText = queryText + ` LIMIT ${limit}`

  console.log(queryText);
  pool.query(queryText, function (error, results, fields) {

    if (error) {
      console.log('error in getting data from Database in /api/getMeals.js')
      response.send(`error` + JSON.stringify(error))
    }

    console.log(results)
    response.send(results)
  })
});

module.exports = router;