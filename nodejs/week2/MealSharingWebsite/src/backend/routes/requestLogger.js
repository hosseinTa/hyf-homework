const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express.Router();

app.use(function (req, res, next) {
    const logFileContent = fs.readFileSync(path.join( __dirname , "../data/requestLog.txt"));
    const Log = JSON.parse(logFileContent);
    Log.push( { "time" : Date.now() , "Path": req.path } );
    fs.writeFileSync(path.join( __dirname , "../data/requestLog.txt") , JSON.stringify(Log));
    next()
});

module.exports = app;
