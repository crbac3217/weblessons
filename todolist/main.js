const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");

app.set("view engine", ejs);
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
var today = new Date();

document.getElementById
})

app.listen(3000, function(){
    console.log("server running")
})