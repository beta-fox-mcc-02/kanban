"use strict"

module.exports = (err, req, res, next) => {

    if(err.name ===  'SequelizeUniqueConstraintError' ) {
        res.status(400).json({
            error : err.errors[0].message
        })
    } else if (err.name === 'email / password might be wrong') {
        res.status(400).json({
            error: err.name
        })
    }
    else {
        res.status(500).json({
            error : "Internal Server Error"
        })
    }
}