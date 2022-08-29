const jwttoken = require('jsonwebtoken')
const authenticate = function (req, res, next) {
  try {
    //check the token in request header
    const checktoken =  req.headers["x-auth-token"]
    if (!checktoken) {
      return res.send("Token is required")
    }
    //validate this token
    const verifytoken = jwttoken.verify(checktoken, "this-is-secret-mesage")
    if (!verifytoken) return res.send("token is not valid")
    next()
  } catch (error) {
   return  res.send(error.message)
  }
}

const authorise = function (req, res, next) {
  // comapre the logged in user's id and the id in request
  let token = req.headers["x-auth-token"]
  let userid = req.params.userId
  let decodetoken = jwttoken.verify(token, "this-is-secret-mesage")
  if (decodetoken.userId !== userid) return res.send("you are not authorised to do the work")
  next()
}
module.exports.authenticate = authenticate
module.exports.authorise = authorise