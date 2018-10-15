var http = require("http");
var express = require("express");
var app = express();

app.get("/",(req,res)=> 
{
    res.send(`Coucou ${express} `)
})

var serveur = http.createServer(app);

serveur.listen(3000)