module.exports = (err, req, res, next) => {
    console.log(err)
    let error = { msg: `internal server error` }
    let status = 500
    if (err.length > 0 && err.substring(0, 5) === 'INPUT') {
        status = 400
        error.msg = err
    }
    else if (err.name === 'SequelizeValidationError') error.msg = err.errors[0].message
    res.status(status).json(error)
}