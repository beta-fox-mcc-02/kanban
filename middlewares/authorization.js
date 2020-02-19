const { Task }= require('../models')

module.exports = (req, res, next) => {
    let id = req.params.id
    Task.findByPk(id)
        .then(task => {
            console.log(task, req.currentUserId)
            if(task) {
                if (task.UserId === req.currentUserId) {
                    next()
                } else {
                    next({
                        name : 'NotAuthorized'
                    })
                }
            } else {
                next({
                    name : 'NotFound'
                })
            }
        })
        .catch(next)
}