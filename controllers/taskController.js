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
        res.status(201).json(task)
      })
      .catch(next)
  }
}

module.exports = TaskController