const count = require('console')

const user = require('../models/usermodel')
const jwt = require('jsonwebtoken')

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
    return res.send("Invaild userid and password")
  }
  let token = jwt.sign({
    userid: checkcredentials._id.toString(),
    name: "Sushant",
    surname: "Bhaiswar"
  }, "this-is-secreate-message")

  res.send({ status: true, Token: token })
}

// update user

const updateuser = async function (req, res) {
  let userid = req.params.Userid
  let userdata = req.body
  let token = req.headers["x-auth-token"]
  if (token) {
    let finduserdetail = await user.findById(userid)
    if (!finduserdetail) return res.send("user not exist")
    let updatedata = await user.findOneAndUpdate({ _id: userid }, userdata)
    return res.send({ UpdatedProfile: updatedata })
  }
  return res.send("Token is not present")
}

// delete user

const deleteuser = async function (req, res) {
  let userid = req.params.Userid
  let finduserdetail = await user.findById(userid)
  if (!finduserdetail) return res.send("user not exist")
  let updatedata = await user.findOneAndUpdate({ _id: userid }, { isDeleted: true} ,{new : true})
  return res.send({ UpdatedProfile: updatedata })

}
module.exports.createuser = createuser
module.exports.userlogin = userlogin
module.exports.updateuser = updateuser
module.exports.deleteuser = deleteuser