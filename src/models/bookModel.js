const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    authorName: String,
    tags: [String],

    stockavailable: { type: Boolean, enum: [true, false] },
    prices: [{ indianPrice: String }, { europeanPrice: String }],
    year: { type: Number, default: 2021 },
    totalpages: Number
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users



//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
