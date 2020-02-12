module.exports = function(err, req, res, next) {
    let status = 500
    let objErr = {
        msg : "Internal Server Error"
    }

    if (err.name === 'NotFound') { // error di di authentication findByPk
        status = 404
        objErr = {
            msg : "Not Found",
            errors : ['is not found']
        }
    } else if (err.name === "JsonWebTokenError") { // error di authentication try catch
         
    } else if (err.name === 'NotAuthorized') {
        status = 401
        objErr = {
            msg : "Access is denied"
        }
    }

    res.status(500).json(err)
}