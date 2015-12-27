// var mongoose = require('mongoose'),
// 	users = require('./models/users')

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto');

mongoose.connect("mongodb://localhost:27017/testwise")

var userSchema = new Schema(
{
	username: String,
	password: String,
	userid: String,
	role: String

})

var User = mongoose.model('User', userSchema);

exports.addUser = function( username, password, callback )
{
	var usernameTemp = new User({
		username: username,
		password: password
	})
	usernameTemp.save(function(err){
		if(err) {
			console.log(err);
		} else {
			console.log("Added Record");
			callback();
		}
	});
}

exports.updateUser = function( username, password )
{
	var usernameTemp = new User({
		username: username,
		password: password
	})
}



// var username1 = new User({
// 	username: "Mahesh",
// 	password: "Unknown",
// 	userid: "rmaheshkumarblr",
// 	role: "administrator"
// })

// username1.save(function(err)
// {
// 	if(err)
// 	{
// 		console.log("error")
// 	}
// 	else
// 	{
// 		console.log("Populated the database")
// 	}
// })
