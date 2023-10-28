var express = require('express');

var app = express();

var things = require('./things.js');

app.use(function(req,res,next){

    console.log("A new request received at " + Date.now());

    next();

});

app.use('/things',things)

app.get('/',function (req,res) {
    res.send("hello world!");
})

app.post('/hello',function(req,res){
    res.send("Hello World!");
})

app.all('/test',function (req,res) {
    res.send("HTTP method doesn't have any effect on this route!");
})

app.listen(3000);