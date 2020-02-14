const { Task, Category } = require('../models')

class TaskController {
   static findAll(req, res, next) {
      let CategoryId = +req.params.categoryId
      let UserId = +req.currentUserId
      //parameter not send
      //categoryId-find berdasarkan CategoryId
      Task.findAll({
         where : {
            CategoryId,
            UserId
         }
      })
         .then(data => {
            res.status(200).json({
               status : 200,
               data,
               msg : "success get all data"
            })
         })
         .catch(err => {
            res.status(400).json({
               status : 400,
               msg : "fail fetch task"
            })
         })
   }

   static findOne(req, res) {
      //receive CategoryId, task detail
      let id = +req.params.id
      let UserId = req.currentUserId
      Task.findOne({
         include: [Category],
         where : {
            id,
            UserId
         }
      })
         .then(task => {
            // console.log(task, 'findOne then')
            res.status(200).json({
               status : 200,
               task,
               msg : "success find one task"
            })
         })
         .catch(err => {
            // console.log(err, 'findOne catch')
            res.status(400).json({
               status : 400,
               msg : "fail find one task"
            })
         })
   }

   static create(req, res) {
      //CategoryId not defined
      // console.log(req.body)
      let UserId = req.currentUserId
      let { title, description, CategoryId } = req.body
      let input = { title, description, CategoryId, UserId }
      Task.create(input)
         .then(task => {
            // console.log(task, 'create then')
            res.status(201).json({
               status:201,
               task,
               msg: 'success create task'
            })
         })
         .catch(err => {
            console.log(err, 'create catch')
            res.status(400).json({
               status:400,
               msg : 'fail create task'
            })
         })
   }

   static update(req, res) {
      let id = +req.params.id
      let { title, description } = req.body
      let input = { title, description}
      Task.update(input, {
         where : {
            id 
         },
         returning : true
      })
         .then(task => {
            console.log(task, 'then update task')
            res.status(200).json({
               status : 200,
               msg : 'sucess update task'
            })
         })
         .catch(err => {
            console.log(err, 'catch update task')
            res.status(400).json({
               status : 400,
               msg : 'fail update task'
            })
         })
   }

   static delete(req, res) {
      let id = req.params.id
      Task.destroy({
         where : {
            id
         }
      })
         .then(data => {
            console.log(data, 'then delete task')
            res.status(200).json({
               status : 200,
               msg : 'sucess delete task'
            })
         })
         .catch(err => {
            console.log(err, 'error delete task')
            res.status(400).json({
               status: 400,
               msg : 'fail delete task'
            })
         }) 
   }
}

module.exports = TaskController