function errorHandler(err, req, res, next) {
    let status = 500
    let errObj = {
        msg: 'internal server error'
    }

    // error validation
    if (err.name === 'SequelizeValidationError') {
        status = 400
        errObj = {
            msg: 'Bad Request',
            errors: []
        }

        err.errors.forEach(error => {
            errObj.errors.push(error.message)
        });
    }

    // error authentication
    if (err.name === 'JsonWebTokenError') {
        status = 401
        errObj = {
            msg: 'you have to login first'
        }
    }
    
    res.status(status).json({errObj})
}

module.exports = errorHandler