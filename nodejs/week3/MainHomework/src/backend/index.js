const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");

const database = require("./database");
const connection = database;

connection.query("SELECT * FROM meal WHERE id = 4;", (error, results) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(results[0].title);
});

const getMealsRouter = require("./api/getMeals");
const postMealsRouter = require("./api/postMeals");
const postMealsRouterBody = require("./api/postMealsBody");
const mealByID = require("./api/mealByID");

const port = process.env.PORT || 3000;

// For week4 no need to look into this!
// Serve the built client html
const buildPath = path.join(__dirname, "./../frontend");
app.use(express.static(buildPath));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

router.use("/meals", getMealsRouter);
router.use("/meals", postMealsRouter);
router.use("/mealsbody", postMealsRouterBody);
router.use("/meals/:id", mealByID ) ; //(req, res) => res.send(req.params));



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
