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
	// Get Secret
	users.addUser(req.body.name, req.body.password, function(){
		res.write("Added Record");
		res.end();
	});
});

router.post('/login', function(req, res, next){
	// res.write('something...');
  var secret = req.app.get('secret');
  users.getUser(req.body.params.username, req.body.params.password, secret, function(data){
    res.json(data);
    if(data["auth"] == 1) {
      res.cookie("userid", data["_id"]);
    }
    res.end();
  });
});

module.exports = router;
