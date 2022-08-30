const jwt = require("jsonwebtoken");
const Bcrypt = require("bcrypt");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
  try {
    let data = abcd.body;
    let password = data.password
    let salt = await Bcrypt.genSalt(10)
    let hashpass = await Bcrypt.hash(password, salt)
    data.password = hashpass
    let savedData = await userModel.create(data);
    xyz.send({ msg: savedData });
  } catch (error) {
    return res.status(500).send({ Msg: error.message })
  }
};
const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: userName });
    let compair = await Bcrypt.compare(password, user.password)
    if (!compair) return res.status(400).send("password is not corrssect")
    if (userName !== user.emailId) return res.status(400).send("emailid is invalid")
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "thorium",
        organisation: "FUnctionUp",
      },
      "this-is-secret-mesage"
    );
    res.setHeader("x-auth-token", token);
    res.status(201).send({ status: true, data: token });
  } catch (error) {
    return res.status(500).send(error.message)
  }
};

const getUserData = async function (req, res) {
  try {
    let token = req.headers["x-auth-token"];
    if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
    console.log(token);
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.status(404).send({ status: false, msg: "No such user exists" });
  
    res.status(200).send({ status: true, data: userDetails });
  } catch (error) {
    return res.status(500).send({msg : error.message})
  }
};

const updateUser = async function (req, res) {
 try {
   let userId = req.params.userId;
   let user = await userModel.findById(userId);
 
   if (!user) {
     return res.status(404).send("No such user exists");
   }
 
   let userData = req.body;
   let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
   res.status(202).send({ status: updatedUser, data: updatedUser });
 } catch (error) {
  return res.status(500).send({msg : error.message})
 }
};

const postMessage = async function (req, res) {
 try {
   let message = req.body.postMessagee
   let userToBeModified = req.params.userId
 
   let user = await userModel.findById(req.params.userId)
   if (!user) return res.status(404).send({ status: false, msg: 'No such user exists' })
   let updatedPosts = user.posts
   //add the message to user's posts
   updatedPosts.push(message)
   let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })
   return res.status(202).send({ status: true, data: updatedUser })
 } catch (error) {
  return res.status(500).send({msg : error.message})
 }
}
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage