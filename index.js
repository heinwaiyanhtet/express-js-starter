var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

app.set('view engine','pug');
app.set('views','./views');

var things = require('./things.js');

app.use(function(req,res,next){
    console.log("A new request received at " + Date.now());
    next();
});


app.use(bodyParser.json()); 

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(upload.array()); 


app.use('/things',things)

app.get('/first_template',function(req,res){
    res.render('first_view');
});


app.use(express.static('public'));

app.get('/', (req, res, next) => {
    setTimeout(() => {
      try {
        throw new Error('BROKEN')
      } catch (err) {
        next(err)
      }
    }, 5000)
  })


  

// app.locals.domain = "https://www.google.com";
// app.locals.name = "hein wai yan htet";

// console.log(app.locals);

// app.get('/',function (req,res) {
//     // res.send("hello world!");
//     res.render('first_view');
// })


app.post('/', function(req, res){
    console.log(req.body);
    res.send("recieved your request!");
 });


app.post('/hello',function(req,res){
    res.send("Hello World!");
})

app.all('/test',function (req,res) {
    res.send("HTTP method doesn't have any effect on this route!");
})

app.listen(3000);