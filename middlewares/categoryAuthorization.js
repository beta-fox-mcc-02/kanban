const { Category, Task } = require('../models')

module.exports = (req, res, next) => {
   console.log(req.currentUserId, '===')
   const id = +req.params.id
   const UserId = req.currentUserId
   Category.findOne({
     where: { id },
     include: [Task]
   })
    .then(category => {
      if(category) {
        console.log('masuk author cat', category)
        if (category.UserId === UserId) {
          next()
        } else {
          next({
            status: 401,
            name: 'NOT_AUTHORIZED',
            message: 'You are not authorized'
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
    .catch(next)
}