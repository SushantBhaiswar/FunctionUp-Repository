const jwt = require('jsonwebtoken')


let verifyToken = async function (req, res, next) {
    try {
        const token = req.headers["x-auth-token"]
        if (!req.headers["x-auth-token"]) {
            return res.send("Token is not present")
        }
        //     var jwkToPem = require('jwk-to-pem');
        //    else  var pem = jwkToPem(jwk);
        //     jwt.verify(token, pem, { algorithms: ['RS256'] }, function (err, decodedToken) {
        //     });
        let decodedToken = jwt.verify(token, "this-is-secreate-message");
        console.log(decodedToken)
        if (!decodedToken)
            return res.send({ status: false, msg: "token is invalid" });
        else
        next()
    }
    catch (error) {
        console.log(error)
        res.send(error)
    }
}

module.exports.verifyToken = verifyToken