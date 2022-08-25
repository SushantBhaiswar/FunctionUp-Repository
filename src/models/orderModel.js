const mongoose = require('mongoose');
const objectid = mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema({
    userId: {
        type: objectid,
        ref: "User"

    },
    productId: {
        type: objectid,
        ref: "Product"
    },
    isFreeAppUser: {
		type: Boolean,
		default: false
	},
    amount: Number,
    date: String

}, { timestamps: true });

module.exports = mongoose.model('order', orderSchema)
