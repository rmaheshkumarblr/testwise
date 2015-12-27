var express = require('express');
var users = require('../users');
var router = express.Router();
//var users = require('users');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/createNewUser', function(req, res, next) {
  res.render('createNewUser', { title: 'Create a new user' });
});

router.post('/dbCreateUser', function(req, res, next) {
	console.log(req.body.name)
	users.addUser(req.body.name, req.body.password, function(){
		res.write("Added Record");
		res.end();
	});
});

router.get('/login', function(req, res, next){
	res.write('something...');
	res.end();
});

module.exports = router;
