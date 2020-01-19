const express = require("express");
const app = express.Router();

app.get("/" , (req , res) => {
    console.log('Home is called-From routes folder');
    res.send('Root is absolutely here-From routes folder');
})

module.exports = app;