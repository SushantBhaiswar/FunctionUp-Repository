
const mid1 = async function (req, res, next) {
    const header = req.headers.isfreeappuser
    if (!header) {
        res.send("the request is missing a header")
    }
    else {
        req.body.isFreeAppUser = header
        next()
    }
}
module.exports.mid1 = mid1
