
const {Task} = require('../models')

module.exports = function(req,res,next){
  let id = +req.params.id
  Task.findOne({
    where : {
      id
    }
  })
    .then(task=>{
      console.log(task);
      if(task){
        if(task.UserId == req.decoded.id){
          next()
        } else {
          next({
            status : 401,
            msg : "You are not Authorized"
          })
        }
      } else {
        next({
          status : 404,
          msg: "Not Found"
        })        
      }
    })
    .catch(err=>{
      next(err)
    })
}