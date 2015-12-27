var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto');

var userSchema = new Schema(
{
	username: String,
	password: String,
	userid: String,
	role: String

})