const { count } = require("console")
const BookModel = require("../models/bookModel")
const Authormodel = require("../models/authorModel")
const bookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.create(data)
    res.send({ msg: savedData })
}
const createauthor = async function (req, res) {
    let data = req.body
    let savedData = await Authormodel.create(data)
    res.send({ msg: savedData })
}
const findbook = async function (req, res) {
    let data = await Authormodel.find({ author_name: "Chetan Bhagat" }).select({ author_id: 1, _id: 0 })
    
    let allbook = await bookModel.find({ author_id: data[0].author_id })
    // console.log(allbook)
    res.send(allbook)
}
const findauthor = async function (req, res) {
    let data = await bookModel.findOneAndUpdate(
        { name: "Two states" },
        { $set: { price: 100 } },
        { new: true }
    ).select({ author_id: 1, _id: 0, price: 1 });
    let alldata = await Authormodel.findOne({ author_id: data.author_id }).select({ author_name: 1, _id: 0 })
    let obj = { price: data.price, name: alldata.author_name }
    res.send({ result: obj })
}
const findbookbycost = async function (req, res) {
    let book = await bookModel.find({ price: { $gte: 50, $lte: 100 } }).select({ author_id: 1, _id: 0 })
    let author = await Authormodel.find()
    let arr = []
    for (let i = 0; i < book.length; i++) {
        for (let j = 0; j < author.length; j++) {
            if (book[i].author_id == author[j].author_id) {
                arr.push(author[j].author_name)
            }
        }
    }
    
    res.send(arr)
}




























const getBooksData = async function (req, res) {
    let allBooks = await BookModel.find({ authorName: "HO" })
    console.log(allBooks)
    if (allBooks.length > 0) res.send({ msg: allBooks, condition: true })
    else res.send({ msg: "No books found", condition: false })
}


const updateBooks = async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks = await BookModel.findOneAndUpdate(
        { authorName: "ABC" }, //condition
        { $set: data }, //update in data
        { new: true, upsert: true } ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT
    )

    res.send({ msg: allBooks })
}

const deleteBooks = async function (req, res) {
    // let data = req.body 
    let allBooks = await BookModel.updateMany(
        { authorName: "FI" }, //condition
        { $set: { isDeleted: true } }, //update in data
        { new: true } ,
    )

    res.send({ msg: allBooks })
}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



module.exports.createBook = createBook
module.exports.getBooksData = getBooksData
module.exports.updateBooks = updateBooks
module.exports.deleteBooks = deleteBooks
module.exports.createauthor = createauthor
module.exports.findbook = findbook
module.exports.findauthor = findauthor
module.exports.findbookbycost = findbookbycost
