const express = require('express');
const router = express.Router();

const UserController = require("../controllers/userController")
const productcontroller = require("../controllers/ProductController")
const ordercontroller = require("../controllers/orderController")
const middleware = require("../middlewares/commonMiddlewares")
// Create product Here
router.post("/createproduct", productcontroller.createproduct)

router.post("/orderproduct", middleware.mid1, ordercontroller.placeorder)

router.post("/createUser",middleware.mid1, UserController.createUser)

module.exports = router;