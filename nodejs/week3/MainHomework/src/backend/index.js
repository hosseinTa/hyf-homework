const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");


const getMealsRouter = require("./api/meal_01_getMeals");
const postMealsByQueryRouter = require("./api/meal_02_postMealsByQuery");
const postMealsRouter = require("./api/meal_03_postMeals");
const mealByID = require("./api/meal_04_mealByID");
const updateMealByID = require("./api/meal_05_updateMealByID");
const deleteMeal = require("./api/meal_06_deleteMeal");


const getReservationsRouter = require("./api/reservations_01_getreservations");
const postReservationRouter = require("./api/reservations_02_postReservation");
const reservationByIDRouter = require("./api/reservations_03_reservationByID");
const updatereservationsByIDRouter = require("./api/reservations_04_updatereservationByID");
const deleteReservationsRouter = require("./api/reservations_05_deletereservations");

const port = process.env.PORT || 3000;

// For week4 no need to look into this!
// Serve the built client html
const buildPath = path.join(__dirname, "./../frontend");
app.use(express.static(buildPath));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

router.use("/meals/", getMealsRouter);
router.use("/mealsByQuery", postMealsByQueryRouter);
router.use("/meals", postMealsRouter);
router.use("/meals/:id", mealByID ) ;
router.use("/meals/:id", updateMealByID ) ;
router.use("/meals/:id", deleteMeal ) ;

router.use("/reservations/", getReservationsRouter);
router.use("/reservations/", postReservationRouter);
router.use("/reservations/:id", reservationByIDRouter);
router.use("/reservations/:id", updatereservationsByIDRouter ) ;
router.use("/reservations/:id", deleteReservationsRouter ) ;

app.use("/api", router);

// For week4 no need to look into this!
// Ensures that the client router works on reload aswell.
// Sends all requests back to index.html where the routing lib takes over
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "./../frontend/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
