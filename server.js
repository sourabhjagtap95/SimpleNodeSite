// // import the http module
// var http = require('http');

// // handle sending requests and returning responses
// function handleRequests (req, res) {
// 	// return string
// 	res.end("Hello World");
// }

// // create the server
// var server = http.createServer(handleRequests)

// // start server and listen on port x
// server.listen(8000, function(){
// 	console.log("Listening on port 8000");
// });

///////////// EXPRESS /////////////

var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var bodyParsers = require('body-parser');
var app = express();
var port = 8000;

app.set('view engine', 'ejs');
app.use(expressLayouts);

// use body parser
app.use(bodyParsers.urlencoded());
// route our app
var router = require('./app/routes');
app.use('/', router);

// use ejs and express express-ejs-layouts

// set static files(css and images)
app.use(express.static(__dirname + '/public'));

//start the server
app.listen(process.env.PORT || 5000);

// // route for homepage
// app.get('/', function (req, res) {
// 	res.send('hello!!');
// });

// // route for about page
// app.get('/about', function (req, res) {
// 	res.send('hello about!!');
// });

// // route for contact page
// app.get('/contact');
// app.post('contact');

