
const mid1 = async function (req, res, next) {
    let header = req.headers.isfreeappuser
    if (!header) {
        res.send("the request is missing a header")
    }
    else
     {
        if (header == 'true') {
            header = true
        }
        if (header == 'false') {
            header =  false
        }
         req.headers.isfreeappuser = header
         console.log(typeof(req.headers.isfreeappuser))
         console.log((req.headers.isfreeappuser))
    
        next()
    }
}
module.exports.mid1 = mid1
