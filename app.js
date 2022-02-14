const express = require("express");
// const bodyParser = require("body-parser");

const app = express();
// app.use(bodyParser.urlencoded({extended:true}))

app.use(express.json());

app.listen(3000, (req, res)=>{
    console.log("listening on port 3000");
})