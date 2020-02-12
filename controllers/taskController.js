const { Task } = require ('../models')
const { Category } = require('../models')

class TaskController {
  static findByCategory(req,res,next){
    let UserId = +req.decoded.id
    Task.findAll({where:{UserId}, include : [Category]})
    .then(task=>{
      let output = task.map(el=>{
        return {
          id : el.id,
          title : el.title,
          category : el.Category.name
        }
      })
      res.status(200).json({output})
    })
    .catch(err=>{
      next(err)
    })
  }

  static editTask(req,res,next){
    let id = +req.params.id
    let { title,CategoryId } = req.body
    let UserId = req.decoded.id
    Task.update({title,CategoryId,UserId}, {
      where : {id}
    })
    .then(result=>{
      res.status(200).json(result)
    })
    .catch(err=>{
      next(err)
    })
  }

  static addTask(req,res,next){
    let { title,CategoryId } = req.body
    let UserId = req.decoded.id
    Task.create({title,CategoryId,UserId})
    .then(result=>{
      console.log(result)
      res.status(201).json({result})
    })
    .catch(err=>{
      next(err)
    })
  }

  static deleteTask(req,res,next){
    let id = req.params.id
    Task.destroy({where:{id}})
    .then(result=>{
      res.status(200).json(result)
    })
    .catch(err=>{
      next(err)
    })
  }
}

module.exports = TaskController