const express = require("express");
const app = express.Router();

app.get("/" , (req , res)=>{
    console.log('Calculator is running');
    // const firsParam = req.param(firstNumber);
    const firstNumber  = parseInt(req.query.firstNumber);
    const secondNumber = parseInt(req.query.secondNumber);
    res.send(`${firstNumber} + ${secondNumber} = ${firstNumber+secondNumber}`);
})

module.exports = app;