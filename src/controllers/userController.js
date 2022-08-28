const UserModel = require("../models/userModel")

const createUser = async function (req, res) {
  // let a = req.headers.isfreeappuser
  //   console.log(typeof(a))
    const userdata = req.body
    const createduser = await UserModel.create(userdata)
    res.send(createduser)
   
}
module.exports.createUser = createUser
