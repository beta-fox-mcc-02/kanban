const { Kanban, Category } = require('../models');

class KanbanController {
  static findAll(req, res, next) {
    const UserId = req.currentUserId;
    Kanban.findAll({
      where: { UserId }
    })
      .then(kanbans => {
        res.status(200).json({ data: kanbans });
      })
      .catch(next)
  }

  static findByCategory(req, res, next) {
    const { CategoryId } = req.params;
    const UserId = req.currentUserId;
    Kanban.findAll({
      where: { UserId, CategoryId },
      include: [Category]
    })
      .then(kanban => {
        if (kanban[0].Category) {
          res.status(200).json({ data: kanban });
        } else {
          next({ status: 400, message: 'Category does not exist' })
        }
      })
      .catch(next)
  }

  static create(req, res, next) {
    const { title, CategoryId } = req.body;
    const UserId = req.currentUserId;
    const dataKanban = { title, CategoryId, UserId }
    Category.findOne({
      where: { id: CategoryId }
    })
      .then(data => {
        if (data) {
          return Kanban.create(dataKanban)
        } else {
          next({ status: 400, message: 'Category does not exist' })
        }
      })
      .then(data => {
        res.status(200).json({ message: 'Success create data' });
      })
      .catch(next)
  }

  static update(req, res, next) {
    const { title, CategoryId } = req.body;
    const { id } = req.params;
    const UserId = req.currentUserId;
    const dataKanban = { title, CategoryId, UserId };
    Category.findOne({
      where: { id: CategoryId }
    })
      .then(data => {
        if (data) {
          return Kanban.update(dataKanban, {
            where: { id }
          })
        } else {
          next({ status: 400, message: 'Category does not exist' })
        }
      })
      .then(data => {
        res.status(200).json({ message: 'Success update data' });
      })
      .catch(next)
  }

  static destroy(req, res, next) {
    const { id } = req.params;
    Kanban.destroy({
      where: { id }
    })
      .then(data => {
        res.status(200).json({ message: 'Success delete data' });
      })
      .catch(next)
  }
}

module.exports = KanbanController;