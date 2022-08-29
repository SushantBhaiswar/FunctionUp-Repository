const count = require('console')
const user = require('../models/usermodel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// create user

const createuser = async function (req, res) {
  const userdata = req.body
  let pass = userdata.password
  const salt = await bcrypt.genSalt(10)
  const hashpass = await bcrypt.hash(pass, salt)
  userdata.password = hashpass
  const createdatainmodule = await user.create(userdata)
  res.send({ msg: createdatainmodule })
}

// User login

const userlogin = async function (req, res) {

  const usercredentials = req.body
  const checkcredentials = await user.findOne({ emailId: usercredentials.emailId})
  if (!checkcredentials.emailId) return res.send("email is not valid")
  const checkpass = await bcrypt.compare(usercredentials.password , checkcredentials.password)
  if (!checkpass) return res.send("it is invalid")
  
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
  let finduserdetail = await user.findById(userid)
  if (!finduserdetail) return res.send("user not exist")
  let updatedata = await user.findOneAndUpdate({ _id: userid }, userdata, { new: true })
  return res.send({ UpdatedProfile: updatedata })

}

// delete user

const deleteuser = async function (req, res) {
  let userid = req.params.Userid
  let finduserdetail = await user.findById(userid)
  if (!finduserdetail) return res.send("user not exist")
  let updatedata = await user.findOneAndUpdate({ _id: userid }, { isDeleted: true }, { new: true })
  return res.send({ UpdatedProfile: updatedata })
}
module.exports.createuser = createuser
module.exports.userlogin = userlogin
module.exports.updateuser = updateuser
module.exports.deleteuser = deleteuser