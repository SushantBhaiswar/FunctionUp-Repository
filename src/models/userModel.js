const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

	name: String,
	balance:
	{
		type: Number,
		default: 100
	},
	address: String,
	age: Number,
	isFreeAppUser: {
		type: Boolean,
		default: false
	},
	gender: { type: String, enum: ["male", "female", "other"] },

});

module.exports = mongoose.model('User', userSchema)
