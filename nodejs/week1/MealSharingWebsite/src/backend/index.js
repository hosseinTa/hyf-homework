const port = 3001;
const express = require("express");
const app = express();

const homeRoute = require('./routes/homeRoute.js');
const mealRoute = require('./routes/mealRoute.js');
const mealsRoute = require('./routes/mealsRoute.js');
const cheapMealsRoute = require('./routes/cheapMealsRoute.js');
const largeMealsRoute = require('./routes/largeMealsRoute.js');
const reservationRoute = require('./routes/reservationRoute.js');
const reservationsRoute = require('./routes/reservationsRoute.js');

app.use("/" ,homeRoute)
app.use("/meal" , mealRoute);
app.use("/meals" , mealsRoute);
app.use("/cheap-meals" ,cheapMealsRoute);
app.use("/large-meals" , largeMealsRoute);
app.use("/reservation" , reservationRoute) 
app.use("/reservations" , reservationsRoute)

app.listen(port , ()=> console.log('Server is running'));
