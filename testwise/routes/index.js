var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/createNewUser', function(req, res, next) {
  res.render('createNewUser', { title: 'Create a new user' });
});

module.exports = router;
