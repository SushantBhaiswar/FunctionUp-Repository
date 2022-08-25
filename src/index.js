const express = require('express');
const moment = require('moment');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://Sushant_Bhaiswar_30:WBYUu1bCYmxmZUmg@cluster0.jui41on.mongodb.net/Book-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))




    app.use(function (req, res, next) {
        const timestamp = moment().format("YYYY-MM-DD  h:mm:ss ,");
        const ip = "192.168.101.73 ,";
        console.log(timestamp, ip, req.url)
        next();
    })



app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
