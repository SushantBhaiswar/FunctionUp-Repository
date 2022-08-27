const count = require('console')
const  express = require('express')
const router = express.Router();

const usercontroller = require('../controller/usercontroller')
const Tokenverification = require("../middleware/auth")

// createuser
router.post("/createuser" , usercontroller.createuser)

// loginuser
router.post("/loginuser",usercontroller.userlogin)

// updateuser
router.put("/updateuser/:Userid",Tokenverification.verifyToken, usercontroller.updateuser)

// delete user
router.get("/deleteuser/:Userid",Tokenverification.verifyToken,  usercontroller.deleteuser)

module.exports = router