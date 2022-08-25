const UserModel = require("../models/userModel")


const createUser = async function (req, res) {
    const userdata = req.body
    const createduser = await UserModel.create(userdata)
    res.send(createduser)
}
module.exports.createUser = createUser
