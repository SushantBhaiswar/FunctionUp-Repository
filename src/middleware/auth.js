const jwttoken = require('jsonwebtoken')
const authenticate = function (req, res, next) {
  try {
    //check the token in request header
    const checktoken =  req.headers["x-auth-token"]
    if (!checktoken) {
      return res.status(401).send("Token is required")
    }
    //validate this token
    const verifytoken = jwttoken.verify(checktoken, "this-is-secret-mesage")
    if (!verifytoken) return res.status(400).send("token is not valid")
    next()
  } catch (error) {
   return  res.status(500).send(error.message)
  }
}

const authorise = function (req, res, next) {
  // comapre the logged in user's id and the id in request
 try {
   let token = req.headers["x-auth-token"]
   let userid = req.params.userId
   let decodetoken = jwttoken.verify(token, "this-is-secret-mesage")
   if (decodetoken.userId !== userid) return res.status(403).send("you are not authorised to do the work")
   next()
 } catch (error) {
  return res.status(500).send(error.message)
 }
}
module.exports.authenticate = authenticate
module.exports.authorise = authorise