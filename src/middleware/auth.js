const token = require('jsonwebtoken')
const authenticate = function (req, req, next) {
    //check the token in request header
    const checktoken = req.hearers["x-auth-token"]
    if (!checktoken) {
        return res.send("Token is required")
    }
    //validate this token
    const verifytoken = token.verify(checktoken , "functionup-thorium")
    if (!verifytoken) res.send("token is not valid")
        next()
}


const authorise = function (req, res, next) {
    // comapre the logged in user's id and the id in request
    next()
}