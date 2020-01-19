const port = 3000;
const express = require("express");
const app = express();

app.get("/" , (req , res) => {
    res.send('Root is here');
})

app.listen(port , ()=> console.log('Server is running'));