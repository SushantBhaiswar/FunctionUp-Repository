const count = require('console')
const  express = require('express')
const router = express.Router();

const usercontroller = require('../controller/usercontroller')

// createuser
router.post("/createuser" , usercontroller.createuser)

// loginuser
router.post("/loginuser",usercontroller.userlogin)

module.exports = router