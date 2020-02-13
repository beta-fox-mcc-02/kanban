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
      let msgNotVerified = `Your email has\'nt been verified. Please check your email and click verification link`
      console.log('in authorization', task)
      if (task) {
        if (task.UserId == req.currentUserId) {
          if (task.User.isVerified) next()
          else next({ msg: msgNotVerified, status: 'not_authorized' })
        } else {
          next({ msg: 'You are not authorized', status: 'not_authorized'})
        }
      } else {
        next({ msg: `Task with id ${req.params.id} not found`, status: 'not_found'})
      }
    })
}