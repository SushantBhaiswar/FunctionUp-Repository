const { count } = require("console")
const productModel = require("../models/ProductModel")

const createproduct = async function (req, res) {
    let productdata = req.body

    let CreateData = await productModel.create(productdata)
    res.send({ data: CreateData })
}

module.exports.createproduct = createproduct
