const ObjectId = require('mongoose').Types.ObjectId;
const { count } = require("console")
const orderModel = require("../models/orderModel")
const productModel = require("../models/ProductModel")
const userModel = require("../models/userModel")


const placeorder = async function (req, res) {

    console.log(typeof(req.headers.isfreeappuser))
    console.log((req.headers.isfreeappuser))
    let orderdata = req.body

    if (!req.body.userId)
        res.send("Userid is required")
    if (!req.body.productId)
        res.send("Productid is required")

    let validateuserid = ObjectId.isValid(orderdata.userId)
    let validateproductid = ObjectId.isValid(orderdata.productId)

    if (!validateuserid)
        return res.send("Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer")
    if (!validateproductid)
        return res.send("Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer")

    let checkuserid = await userModel.findById(orderdata.userId)
    let checkproductid = await productModel.findById(orderdata.productId)

    if (!checkuserid)
        return res.send("Userid not valid")
    if (!checkproductid)
        return res.send("Productid not valid")


    const productprice = await productModel.findById(orderdata.productId)
    const userbalance = await userModel.findById(orderdata.userId)
    const updateduserbalance = userbalance.balance - productprice.price;
    console.log(updateduserbalance)

    if (req.headers.isfreeappuser == true) {
        orderdata.amount = 0
        orderdata.isFreeAppUser = true;
        let CreateData = await orderModel.create(orderdata)
        return res.send({ msg: CreateData })
    }
    else {
        if (productprice.price > userbalance.balance) {
            return res.send("You have insufficent balance ")
        }
        else {
            orderdata.isFreeAppUser = false;
            res.send(await userModel.findOneAndUpdate({ _id: orderdata.userId }, { balance: updateduserbalance }, { new: true }))
        }
    }
}
module.exports.placeorder = placeorder

