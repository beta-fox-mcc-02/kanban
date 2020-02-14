const { Task } = require ('../models')
const { Category } = require('../models')

class CategoryController {
  static findOne(req,res,next){
    let UserId = req.decoded.id
    Category.findAll({
      include:[Task], order:[['id','ASC']]})
    .then(category=>{
      let categories = []
      let output = category.forEach(el => {
        let output = el.Tasks.filter(element=>{
          return element.UserId === UserId
        })
        let temp=output.map(el => {
          return {title: el.title, id:el.id}
        })
        let outOk = temp.sort((a,b)=>a.id-b.id)
        categories.push({
          id : el.id, name : el.name, task : outOk
        })
      })
      res.status(200).json({categories})
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

module.exports = CategoryController