const {verifyToken} = require('../helpers/jwt')
const {Task} = require('../models')

module.exports = {
  authentication(req, res, next) {
    let token = verifyToken(req.headers.token)
    if(token) {
      req.currentUserId = token.id
      next()
    }
    else next({
      name: "AuthenticationError",
      status: 401,
      msg: "Please login first"
    })
  },

  authorization(req, res, next) {
    let {currentUserId} = req 
    let taskId = +req.params.id
    Task.findByPk(taskId)
      .then(task => {
        if(!task) next({
          name: "AthorizationError",
          status: 401,
          msg: "No access available"
        })
        else {
          if(currentUserId != task.UserId) next({
            name: "AthorizationError",
            status: 401,
            msg: "No access available"
          })
          else next()
        }
      })
      .catch(next)
  }
}