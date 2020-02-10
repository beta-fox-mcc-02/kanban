module.exports = function(err, req, res, next) {
    let status = 500
    let objErr = {
        msg : "Internal Server Error"
    }

    res.status(status).json(objErr)
}