const { Task, Category, User } = require('../models')

class TaskController {
  static getAllTask (req, res, next) {
    Task.findAll({
      include: [Category, {
        model: User,
        attributes: { 
          exclude: ['password', 'createdAt', 'updatedAt'] 
        }
      }]
    })
      .then(task => {
        console.log(task)
        res.status(200).json(task)
      })
      .catch(next)
  }

  static getOneTask (req, res, next) {
    Task.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(task => {
        console.log(task)
        res.status(200).json(task)
      })
      .catch(next)
  }

  static createTask (req, res, next) {
    const { title, CategoryId } = req.body
    Task.create({
      title,
      CategoryId,
      UserId: req.currentUserId
    })
      .then(task => {
        console.log(task)
        res.status(201).json({
          task,
          msg: 'Create task success'
        })
      })
      .catch(next)
  }

  static updateTask (req, res, next) {
    const { title } = req.body
    Task.update({ title }, {
      where: {
        id: req.params.id
      }
    })
      .then(task => {
        console.log(task)
        if (task[0]) res.status(200).json({ msg: 'Update success' })
        else res.status(400).json({ msg: 'Something is wrong when update.' })
      })
      .catch(next)
  }

  static changeCategory (req, res, next) {
    const { CategoryId } = req.body
    Task.update({ CategoryId }, {
      where: {
        id: req.params.id
      }
    })
      .then(task => {
        console.log(task)
        if (task[0]) res.status(200).json({ msg: 'Change category success' })
        else res.status(400).json({ msg: 'Something is wrong when change category.' })
      })
      .catch(next)
  }

  static deleteTask (req, res, next) {
    Task.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(task => {
        console.log(task)
        if (task) res.status(200).json({ msg: 'Delete task success' })
        else res.status(400).json({ msg: 'Something is wrong when delete task.' })
      })
      .catch(next)
  }
} // the end of class TaskController

module.exports = TaskController