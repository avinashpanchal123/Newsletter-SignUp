const express = require("express");
// const bodyParser = require("body-parser");
const request = require("request")

const app = express();
// app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))
app.use(express.json());

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/signUp.html")
})

app.listen(3000, (req, res)=>{
    console.log("listening on port 3000");
})