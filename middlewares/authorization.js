const { Task, User } = require('../models')

module.exports = (req, res, next) => {
  Task.findByPk(req.params.id, {
    include: [{
      model: User,
      attributes: { 
        exclude: ['password', 'createdAt', 'updatedAt'] 
      }
    }]
  })
    .then(task => {
      console.log('in authorization', task)
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