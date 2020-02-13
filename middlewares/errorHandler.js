function errorHandler(err, req, res, next) {
    console.log('=======', err)
    let status = 500
    let errObj = {
        msg: 'internal server error'
    }

    // error not found
    if (err.name = 'notFound') {
        status = 404,
        errObj = {
            msg: 'Not Found'
        }
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

    // validation unique email
    if (err.name === 'SequelizeUniqueConstraintError') {
        status = 400,
        errObj = {
            msg: 'email already exists'
        }
    }

    // sign in error
    if (err.name = 'signInRequirementError') {
        status = 400,
        errObj = {
            msg: 'invalid email or password'
        }
    }
    
    res.status(status).json(errObj)
}

module.exports = errorHandler