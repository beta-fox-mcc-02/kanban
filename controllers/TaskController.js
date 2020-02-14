const {Task, Category} = require('../models')

class TaskController {
  static findAll(req, res, next) {
    let {currentUserId} = req
    Task.findAll({
      where: {
        UserId: currentUserId
      },
      order: [['updatedAt']],
      include: Category
    })
      .then(tasks => {
        res.status(200).json(tasks)
      })
      .catch(next)
  }

  static findByPk(req, res, next) {
    let taskId = +req.params.id
    Task.findByPk(taskId, {
      include: Category
    })
      .then(task => {
        res.status(200).json(task)
      })
      .catch(next)
  }

  static create(req, res, next) {
    let UserId = req.currentUserId
    let {title, description} = req.body
    let CategoryId = 1
    Task.create({title, description, CategoryId, UserId})
      .then(() => {
        res.status(201).json({
          msg: "Create new task successful"
        })
      })
      .catch(next)
  }

  static update(req, res, next) {
    let taskId = +req.params.id
    let {title, description, CategoryId} = req.body
    Task.update({title, description, CategoryId}, {
      where: {
        id: taskId
      }
    })
      .then(() => {
        res.status(200).json({
          msg: "Update task successful"
        })
      })
      .catch(next)
  }

  static delete(req, res, next) {
    let taskId = +req.params.id
    Task.destroy({
      where: {id: taskId}
    })
      .then(() => {
        res.status(200).json({
          msg: "Delete task successful"
        })
      })
      .catch(next)
  }
}

module.exports = TaskController