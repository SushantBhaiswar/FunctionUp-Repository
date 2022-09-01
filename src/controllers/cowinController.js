let axios = require("axios");
const { json } = require("body-parser");
const { options } = require("../routes/route");


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

//Que-1 -----------------------WRITE A GET API FUNCTION TO GET THE LIST OF ALL THE------------------------

const getlistbydistricid = async function (req, res) {
    try {
        let district_id = req.query.district_id
        let date = req.query.date
        let options = {
            method: "get",
            url: `http://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`
        }
        let result = await axios(options)
        res.send({ msg: result.data })
    } catch (error) {
        res.status(500).send({ msg: error })
    }
}
// Que- 2 -----------------------WRITE API TO Get weather of London---------------------------------

let weatherofLondon = async function (req, res) {
    try {
        let city = req.query.q
        let id = req.query.appid
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`
        }
        let result = await axios(options)
        // let temp = result.data.main.temp
        res.status(200).send((result.data.main.temp).toString())

    } catch (error) {
        res.status(500).send({ msg: error.message })
    }
}



let getwhetherofcity = async function (req, res) {
    try {
        let cities = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let cityObjArray = []
       
        for (i = 0; i < cities.length; i++) 
        {
            let obj = { city: cities[i] }
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=09581a6afc16741d5192e7d7efe68f6e`)
            obj.temp = resp.data.main.temp
            cityObjArray.push(obj)
        }

        let sorted = cityObjArray.sort(function (a, b) { return a.temp - b.temp })
        res.status(200).send({ status: true, data: sorted })
    } catch (error) 
    {
        res.status(500).send({ status: false, asg: error.message})
    }
}


// -------------------------------------------- Que 3 ---------------------------------------------------
let Getallthememes = async function (req, res) {
    try {
        let options = {
            method: "get",
            url: "https://api.imgflip.com/get_memes"
        }
        let result = await axios(options)
        // let a = JSON.parse(...result)
        console.log((result))
        res.send((result))
    } catch (error) {
        res.send({ msg: error.message })
    }
}

let createmeems = async function (req, res) {
    let username = req.query.username
    let password = req.query.password
    let template_id = req.query.template_id
    let text0 = req.query.text0
    let text1 = req.query.text1
    let o = {
        method: "post",
        url: `https://api.imgflip.com/caption_image?username=${username}&password=${password}&template_id=${template_id}&text0=${text0}&text1=${text1}`
    }
    let result = await axios(o)
    res.send({ Data: result.data })
}




module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getlistbydistricid = getlistbydistricid
module.exports.weatherofLondon = weatherofLondon
module.exports.Getallthememes = Getallthememes
module.exports.createmeems = createmeems
module.exports.getwhetherofcity = getwhetherofcity
