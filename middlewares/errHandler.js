module.exports = (err, req, res, next) => {
    console.log(err)
    let error = { msg: `internal server error` }
    let status = 500
    if (err.length > 0 && err.substring(0, 5) === 'INPUT') {
        status = 400
        error.msg = err
    }
    else if (err.name === 'SequelizeValidationError') {
        let containerErrors = []
        err.errors.forEach(element => {
            containerErrors.push(element.message)
        });
        error.msg = containerErrors
        status = 400
    }
    res.status(status).json(error)
}