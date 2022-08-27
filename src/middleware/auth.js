let verifyToken = async function(req,res,next)
{
    if (!req.headers["x-auth-token"]) {
        return res.send("Token is not present")
    }
    else
    next()
}

module.exports.verifyToken = verifyToken