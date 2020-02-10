const errroHandler = (err, req, res, next) => {
    if(err.name === 'SequelizeValidationError') {
        res.status(400).json(err.errors[0].message)
    } else if(err.name === 'BadRequest') {
        res.status(400).json(err.message)
    } else {
        res.status(500).json(err)
    }
}

module.exports = errroHandler;