const { Category, Task } = require('../models')

class CategoryController {
  static getCategories(req, res, next) {
    const user_id = req.decoded
    Category.findAll({
      attributes: ['id', 'name'],
      include: [Task],
      where: {
        user_id
      }
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
          name: newCategory.name
        })
      })
      .catch(next)
  }
}

module.exports = CategoryController