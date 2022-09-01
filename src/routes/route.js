const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
router.get("/cowin/getlistbydistricid", CowinController.getlistbydistricid)
router.get("/weatherofLondon", CowinController.weatherofLondon)
router.get("/Getallthemems", CowinController.Getallthememes)
router.post("/createpost", CowinController.createmeems)
router.get("/getwhetherofcity", CowinController.getwhetherofcity)



module.exports = router;