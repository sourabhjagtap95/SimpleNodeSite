// require express
var express = require('express');

var path = require('path');

// create our router object 
var router = express.Router();


// export our router
module.exports = router;

// route for homepage
router.get('/', function (req, res) {
	// res.send('hello!!');
	res.render('pages/index');
});

// route for about page
router.get('/about', function (req, res) {

	var users = [
		{ name : 'Sourabh', email: 'sourabhjagtap95@gmail.com', avatar: 'http://placekitten.com/300/300'},
		{ name : 'Chris', email: 'Chris@gmail.com', avatar: 'http://placekitten.com/400/400'},
		{ name : 'John', email: 'John@gmail.com', avatar: 'http://placekitten.com/600/600'},
		{ name : 'Jack', email: 'Jack@gmail.com', avatar: 'http://placekitten.com/700/700'},
	];
	res.render('pages/about', {users: users});
});

// route for contact page
router.get('/contact', function (req, res) {
	res.render('pages/contact');
});

router.post('/contact', function(req, res){
	res.send('Thanks for contacting us, ' + req.body.name + '! We will respond shortly!!');
});
