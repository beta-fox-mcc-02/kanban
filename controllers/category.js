const { Category, Task } = require('../models')

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
}

module.exports = CategoryController