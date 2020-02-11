const { Category, Kanban } = require('../models');

class CategoryController {
  static findAll(req, res, next) {
    Category.findAll()
      .then(categories => {
        res.status(200).json({ data: categories })
      })
      .catch(next)
  }

  static findOne(req, res, next) {
    const { id } = req.params;
    Category.findOne({
      where: { id }
    })
      .then(category => {
        res.status(200).json({ data: category });
      })
      .catch(next)
  }
  static create(req, res, next) {
    const { name } = req.body;
    const data = { name };
    Category.create(data)
      .then(category => {
        res.status(201).json({ message: 'Success create new category' });
      })
      .catch(next)
  }

  static update(req, res, next) {
    const { id } = req.params;
    const { name } = req.body;
    const data = { name };
    Category.update(data, {
      where: { id }
    })
      .then(data => {
        res.status(200).json({ message: 'Success update category' })
      })
  }

  static destroy(req, res, next) {
    const { id } = req.params;
    const UserId = req.currentUserId;
    Kanban.destroy({
      where: { CategoryId: id, UserId }
    })
      .then(data => {
        return Category.destroy({
          where: { id }
        })
      })
      .then(data => {
        res.status(200).json({ message: 'Success delete category' })
      })
      .catch(next)
  }

}

module.exports = CategoryController;