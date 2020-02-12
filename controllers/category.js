const { Category } = require('../models')

class CategoryController {
  static getCategories(req, res, next) {
    const user_id = req.decoded
    Category.findAll({
      attributes: ['id', 'name'],
      where: {
        user_id
      }
    })
      .then(categories => {
        res.status(200).json(categories)
      })
      .catch(next)
  }
}

module.exports = CategoryController