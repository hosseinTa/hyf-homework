const express = require("express");
const app = express();

app.get("/" , (req, res) => {
    res.send(`you are home!`);
});

app.get("/numbers/add/:id" , (req, res) => {
    res.send(`you entere ${req.params.id}`);
});

//GET /numbers/multiply/<first number here>/<second number here>. in response send multiplication (first * second).
app.use("/numbers/multiply" , (req, res) => {
    const url = req.url;
    const name = url.split("/");
    res.send(name[name.length-2] + ' * ' + name[name.length-1]);
});

//GET /numbers/add?first=<number here>&second=<number here>. In response send sum (first + second).
app.get("/numbers/add?" , (req, res) => {
    res.send(`you entere ${req.query.firstNumber} ,  ${req.query.secoundNumber} and the summation is ${Number(req.query.firstNumber) + Number(req.query.secoundNumber)} `);
});

app.listen(3000, ()=> console.log("server is running."))