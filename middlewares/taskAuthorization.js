const { Task } = require('../models')

module.exports = (req, res, next) => {
  const id = +req.params.id
  const UserId = req.currentUserId
  // console.log(id, UserId, 'authorization')
   Task.findOne({
     where: { id }
   })
    .then(task => {
      // console.log(task, 'masuk sini')
      if(task) {
        // console.log('masuk sini 2')
        if(task.UserId === UserId) {
          // console.log('next finish')
          next()
        } else {
          next({
            status: 401,
            name: 'Not authorized',
            msg: 'You are not authorized to access this category'
          })
        }
      } else {
        next({
          status: 404,
          name: 'Not found',
          msg: 'Task not found'
        })
      }
    })
    .catch(err => {
      console.log(err)
      next(err)
    })
}
