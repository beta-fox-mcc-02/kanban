module.exports = function(err, req, res, next) {
    let status = 500
    let objErr = {
        msg : "Internal Server Error"
    }
    if (err.name === "SequelizeValidationError") {
        status = 400
        let errorMessages = []
        err.errors.forEach(error => {
            errorMessages.push(error.message)
        }) 
        objErr = {
            msg : 'Bad Request',
            errors : errorMessages
        }
    } else if (err.name === "SequelizeUniqueConstraintError") {
        status = 400
        objErr = {
            msg : 'Bad Request',
            errors : ['Email is already exists']
        }
    } else if (err.name === "ErrorLogin") {
        status == 400
        objErr = {
            msg : 'Bad Request',
            errors : err.msg
        }
    } else if (err.name === 'NotFound') { // error di di authentication findByPk
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

    res.status(status).json(objErr)
}