const express = require('express');
// import express from "express";      // both are same way to import the express

require('dotenv').config();
const app = express();       // this means we take all functionally of the express into app

const port = process.env.PORT || 5000;;

app.get('/', function(req, res) {
    res.send("Hello World!");
});

app.get('/twitter', (req, res) => {
    res.send("hitesh");
});

app.get('/login', (req, res) => {
    res.send(`<h1> Go to chai aur code for login </h1>`)
});

app.listen(port, function () {
    console.log(`the server is responded on ${port}`);
    // console.log(`the server is responded on ${PORT}`);
});



