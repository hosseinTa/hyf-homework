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
const reviewsRoute = require("./routes/reviewsRoute");
const reservationIdRoute = require('./routes/reservationIdRoute.js');
const mealIdRoute = require('./routes/mealIdRoute.js');
const reviewsIdRoute = require("./routes/reviewsIdRoute.js");
const maxPriceRoute = require("./routes/maxPriceRoute.js")
const titleContainsRoute = require("./routes/titleContainsRoute.js");
const requestLogger = require("./routes/requestLogger.js")
app.use(requestLogger)
app.use("/" ,homeRoute)
app.use("/meal" , mealRoute);
app.use("/meals" , mealsRoute);
app.use("/cheap-meals" ,cheapMealsRoute);
app.use("/large-meals" , largeMealsRoute);
app.use("/reservation" , reservationRoute);
app.use("/reservations" , reservationsRoute);
app.use("/reviews" , reviewsRoute);

app.get("/reservationsid/:id" , reservationIdRoute);
app.get("/meals/:id" , mealIdRoute);
app.get("/reviews/:id" , reviewsIdRoute);
app.get("/maxPriceRoute/:price" , maxPriceRoute);
app.get("/api/meals?" , titleContainsRoute);

app.listen(port , ()=> console.log(`Server is running on port ${port}`));