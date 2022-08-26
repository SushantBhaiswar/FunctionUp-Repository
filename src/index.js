const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const route = require('./router/route')

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://Sushant_Bhaiswar_30:WBYUu1bCYmxmZUmg@cluster0.jui41on.mongodb.net/Book-DB?retryWrites=true&w=majority",
    {
        useNewUrlParser: true
    })
    .then(() => console.log("mongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route)

app.listen(process.env.PORT || 3000, function () {
    console.log("Express app is running on port" + (process.env.PORT || 3000))
})