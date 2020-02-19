const errroHandler = (err, req, res, next) => {
    if(err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
        res.status(400).json(err.errors[0].message)
    } else if(err.name === 'BadRequest') {
        res.status(400).json(err.message)
    } else if(err.name === 'AuthenticationError' || err.name === 'AuthorizationError') {
        res.status(401).json(err.message)
    } else if(err.name === 'JsonWebTokenError') {
        res.status(401).json('login required')
    } else if(err.name === 'NotFound') {
        res.status(404).json(err.message)
    } else {
        res.status(500).json("internal server error, problem might be occured while some process are done")
    }
}

module.exports = errroHandler;