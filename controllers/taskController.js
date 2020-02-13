const { Task } = require('../models')

class TaskController {
   static create(req, res, next) {
      let newTask = {
         title: req.body.title,
         status: req.body.status,
         ProjectId: req.body.ProjectId
      }
      Task.create(newTask)
         .then(data => {
            res.status(201).json(data)
         })
         .catch(err => {
            next(err)
         })
   }

   static delete(req, res, next) {
      Task.destroy({
         where: {
            id: req.params.id
         }
      })
         .then(data => {
            if (data === 0) {
               next({ code: 404, message: `cannot find project with id ${req.params.id}` })
            }
            else {
               res.status(200).json({ msg: `Task with id ${req.params.id} has been deleted` })
            }
         })
         .catch(err => {
            next(err)
         })
   }

   static update(req, res, next) {
      let update = {
         title: req.body.title,
         status: req.body.status
      }
      Task.update(update, {
         where: {
            id: req.params.id
         },
         returning: true
      })
         .then(data => {
            if (data[0] === 0) {
               next({ code: 404, message: `cannot find Task with id ${req.params.id}` })
            }
            else {
               res.status(200).json(data[1][0])
            }
         })
         .catch(err => {
            next(err)
         })
   }
}

module.exports = TaskController