const express = require("express");
const app = express();

app.get("/" , (req , res)=>{
    console.log('root is called');
    res.send('welcome to the root');
})

app.listen(9000 , ()=> console.log('server is running on port 9000,9000. Welcome'));