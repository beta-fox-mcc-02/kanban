const { Task } = require ('../models')
const { Category } = require('../models')

class CategoryController {
  static findOne(req,res,next){
    let {id} = req.body
    Category.findOne({where:{id}})
    .then(category=>{
      res.status(200).json({category})
    })
    .catch(err=>{
      next (err)
    })
  }

  static update(req,res,next){
    let { name } = req.body
    let id = +req.params.id
    Category.update({name}, {
      where: {id}
    })
    .then(result=>{

    })
    .catch(err=>{
      next (err)
    })
  }

  static addCategory(req,res,next){
    let { name } = req.body
    Category.create({name})
    .then(category=>{
      res.status(201).json({category})
    })
    .catch(err=>{
      next (err)
    })
  }

  static deleteCategory(req,res,next){
    let id = req.params.id
    Task.destroy({where:{
      CategoryId:id
    }})
    .then(result=>{
      return Category.destroy({where:{id}})
    })
    .then(result=>{
      res.status(200).json({result})
    })
    .catch(err=>{
      next (err)
    })
  }
}
