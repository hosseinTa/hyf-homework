const express = require("express");
const app = express.Router();

app.get("/" , (req , res)=>{
    console.log('test is called');
    res.send('It is TEST route');
})

module.exports = app;