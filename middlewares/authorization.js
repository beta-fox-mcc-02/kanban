const { Task } = require('../models')

module.exports = (req, res, next) => {
    Task.findOne({where: {id: +req.params.id}})
        .then(result => {
            if (!result) {
                let errObj = {
                    status: 404,
                    errors: [{
                      message: 'task is not found'
                    }]
                }
                next(errObj)
            } else {
                if(result.UserId == req.decoded.id) {
                    next()
                } else {
                    let errObj = {
                        status: 403,
                        errors: [{
                          message: 'you are not authorized'
                        }]
                    }
                    next(errObj)
                }
            }
        })
        .catch(err => {
            next(err)
        })
}