const { Task } = require('../models')
const { Op } = require('sequelize')

class TaskController {
  static addTask(req, res, next) {
    const input = {
      title: req.body.title,
      category_id: req.body.category_id,
      user_id: req.decoded
    }
    Task.create(input)
      .then((newTask) => {
        res.status(201).json(newTask)
      }).catch((err) => {
        next(err)
      });
  }

  static getAllTask(req, res, next) {
    Task.findAll({
      where: {
        [Op.and]: [
          {
            category_id: +req.params.category_id
          },
          {
            user_id: req.decoded
          }
        ]
      }
    })
      .then(tasks => {
        res.status(200).json(tasks)
      })
      .catch(err => {
        next(err)
      })
  }
}

module.exports = TaskController