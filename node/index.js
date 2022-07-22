const express = require("express");
const app = express();
const https = require("https");

app.get("/", function(req, res){
    https.get("https://v2.jokeapi.dev/joke/Dark?blacklistFlags=religious,political,racist,sexist,explicit", function(jokeRes){
        jokeRes.on("data", function(data){
            const joke = JSON.parse(data);
            console.log(joke);
            if(joke.type === 'twopart'){
                res.send(joke.setup + " " + joke.delivery)
            }
            else{
                res.send(joke.joke)
            }
            
        })
    })
    
    
});

app.listen(process.env.PORT, function(){
    console.log("is indeed running")
});