const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    BookName: String,
    AuthorName: String,
    category: {
        type: String,
        enum: ["crimethriller", "fictional", "non-fictional","others"]
    },
    year: String,

}, { timestamps: true });

module.exports = mongoose.model('User', BookSchema)

