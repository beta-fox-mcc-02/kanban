module.exports = (err, req, res, next) => {
    let code = 500
    let message = []
    console.log(err);
    if(err.name === 'SequelizeValidationError') {
        code = 400
        err.errors.forEach(error => {
            message.push(error.message)
        });
    }
    else if(err.name === 'WrongEmail' || err.name === 'WrongPassword') {
        code = 400
        message = 'Incorrect email / password'
    }
    else if (err.name === 'SequelizeUniqueConstraintError') {
        code = 400
        message = `user with email ${err.fields.email} already exists`
    }
    else if (err.name === 'JsonWebTokenError') {
        code = 404
        message = `You're not logged in. Please login to continue`
    }
    else{
        message = 'Internal Server Error'
    }
    res.status(code).json(message)
}