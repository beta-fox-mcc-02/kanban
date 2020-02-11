const { Task } = require('../models')

module.exports = (req, res, next) => {
    Task.findByPk(req.params.id)
        .then(task => {
            if (task) {
                if(task.UserId === req.currentUserId) {
                    next()
                } else {
                    next({
                        status: 401,
                        msg: "you didnt have authorized"
                    })
                }
            } else {
                next({
                    status: 400,
                    msg: "Data not found"
                })
            }
        })
        .catch(next)
}