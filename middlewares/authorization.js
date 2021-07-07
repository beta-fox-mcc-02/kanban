const { Task } = require('../models')

module.exports = function(req, res, next) {
    const paramsId = req.params.id
    const { id } = req.decoded

    Task.findOne({
        where: {
            id: paramsId
        }
    })
        .then(response => {
            if (response.UserId === id) {
                next()
            } else {
                res.status(401).json({
                    message: 'not authorized'
                })
            }
        })
        .catch(err => {
            next(err)
        })
}