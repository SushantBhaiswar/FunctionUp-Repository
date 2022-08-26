
const mid1 = async function (req, res, next) {
    let header =req.headers.isfreeappuser
    // req.headers.isfreeappuser = header
    if (!header) {
        res.send("the request is missing a header")
    }
    else
     {
        // //    let bool = Boolean(header)
         req.body.isFreeAppUser =Boolean(req.headers.isfreeappuser);
        //  header = Boolean(header)

        req.headers.isfreeappuser = Boolean(req.headers.isfreeappuser)
         console.log(typeof(req.headers.isfreeappuser))
         console.log((req.headers.isfreeappuser))
    
        next()
    }
}
module.exports.mid1 = mid1
