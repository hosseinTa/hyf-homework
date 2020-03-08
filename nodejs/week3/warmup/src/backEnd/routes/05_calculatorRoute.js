const express = require("express");
const app = express.Router();

app.get("/" , (req , res)=>{
    console.log('Calculator is running');
    // const firsParam = req.param(firstNumber);
    const firstNumber  = parseInt(req.query.firstNumber);
    const secondNumber = parseInt(req.query.secondNumber);

    // console.log(req.body.method)
    // if(req.body.method === 'multiply') {
    //     res.send(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
    // } else {
        // res.send(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
    // }
    res.send("fff");
})

module.exports = app;