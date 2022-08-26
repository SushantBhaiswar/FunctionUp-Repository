const count = require('console')

const user = require('../models/usermodel')
const jwt =require('jsonwebtoken')

// create user

const createuser = async function (req, res) {
  const userdata = req.body
  const createdatainmodule = await user.create(userdata)
  res.send({ msg: createdatainmodule })
}

// User login

const userlogin = async function (req, res) {

  const usercredentials = req.body
  const checkcredentials = await user.findOne({ emailId: usercredentials.emailId, password: usercredentials.password })


  if (!checkcredentials) {
  return  res.send("Invaild userid and password")
  }
  let token = jwt.sign({
    userid: checkcredentials._id.toString(),
    name: "Sushant",
    surname: "Bhaiswar"
  }, "this-is-secreate-message")

  res.send({status : true , Token : token })
}


module.exports.createuser = createuser
module.exports.userlogin = userlogin