const jwt = require('jsonwebtoken')


const AuthenticationCheck = async function (req, res, next) {
    try {
      let token = req.headers[x-auth-token];
      if (!token) return res.send({ status: false, message: "token must be present" });
      let bearerToken = token.split(" ")[1]
  
  
      jwt.verify(bearerToken, "this-is-secreate-message", function (err, decodedToken) {
        if (err) {
          return res.status(401).send({ status: false, message: "invalibbbbd token" })
        } else {
          console.log(decodedToken)
          req.loggedInUserId = decodedToken.userId
          next()
        }
      })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
      }
    
}
 
// const authorisation = async function(req ,res ,next)
// {
//     let decode
// }

module.exports.AuthenticationCheck = AuthenticationCheck

