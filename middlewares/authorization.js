const { Task } = require('../models')

module.exports = (req, res, next) => {
  Task.findByPk(req.params.id)
    .then(task => {
      if (task) {
        if (task.UserId == req.currentUserId) {
          next()
        } else {
          next({ msg: 'You are not authorized', status: 'not_authorized'})
        }
      } else {
        next({ msg: `Task with id ${req.params.id} not found`, status: 'not_found'})
      }
    })
}