const express = require("express");
const dotenv = require('dotenv');
const app = express();

dotenv.config();

const multiplyRoute = require("./routes/01_multiplyRoute.js");
const additionRoute = require("./routes/02_additionRoute.js");
const subtractionRoute = require("./routes/03_subtractionRoute.js");
const devisionRoute = require("./routes/04_devisionRoute.js");
const calculatorRoute = require("./routes/05_calculatorRoute.js");

app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
})

app.use(express.json());
app.get("/", (req, res) => {
    console.log('root is called');
    res.send('welcome to the root');
})

app.use("/calculator/multiply", multiplyRoute);
app.use("/calculator/addition", additionRoute);
app.use("/calculator/subtraction", subtractionRoute);
app.use("/calculator/devision", devisionRoute);

app.use("/alaki", calculatorRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server is runnnnnnning on port ${PORT}. Welcome`));