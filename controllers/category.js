const { Category, Task } = require('../models')
const { Op } = require('sequelize')

class CategoryController {
  static getCategories(req, res, next) {
    const user_id = req.decoded
    Category.findAll({
      include: [{
        model: Task
      }],
      where: {
        user_id
      },
      order: [
        ['id', 'ASC']
      ]
    })
      .then(categories => {
        res.status(200).json(categories)
      })
      .catch(next)
  }

  static addCategory(req, res, next) {
    const parameters = {
      name: req.body.name,
      user_id: req.decoded
    }

    Category.create(parameters)
      .then(newCategory => {
        res.status(200).json({
          newCategory
        })
      })
      .catch(next)
  }

  static editCategory(req, res, next) {
    const id = +req.params.id
    const parameters = {
      name: req.body.name,
      user_id: req.decoded
    }
    Category.update(parameters, {
      where: {
        id
      }, returning: true
    })
      .then(category => {
        res.status(200).json(category)
      })
      .catch(next)
  }

  static findOneCategory(req, res, next) {
    const id = +req.params.id
    Category.findOne({
      include: [Task],
      where: {
        [Op.and]: [
          {
            id
          },
          {
            user_id: req.decoded
          }
        ]
      }
    })
      .then(category => {
        res.status(200).json(category)
      })
      .catch(next)
  }
}

module.exports = CategoryController