const { Task } = require('../models')

const isAuthorizationed = (req, res, next) => {
  const id = +req.params.id
  const user_id = req.decoded
  Task.findOne({
    where: {
      id
    }
  })
    .then(task => {
      if (task) {
        if (task.user_id === user_id) {
          next()
        } else {
          next({
            status: 401,
            name: 'NOT_AUTHORIZED',
            message: 'You are not authorized to access this task'
          })
        }
      } else {
        next({
          status: 404,
          name: 'NOT_FOUND',
          message: 'Task not found with id ' + id
        })
      }
    })
    .catch(err => {
      next(err)
    })
}

module.exports = isAuthorizationed