const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    firstName : String,
    lastName: String,
    mobile: String,
    emailId: String,
    password: String,
    gender: String,
    isDeleted: {
        type: Boolean,
        default: false
    },
    posts :{type : [] , default : []},
    age : Number,
})

module.exports = mongoose.model("usersdetail", userschema)