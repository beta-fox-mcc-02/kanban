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
    const { category } = req.params;
    const UserId = req.currentUserId;
    Kanban.findAll({
      where: { UserId },
      include: [{
        model: Category,
        where: { name: category }
      }]
    })
      .then(kanban => {
        res.status(200).json({ data: kanban });
      })
      .catch(next)
  }

  static create(req, res, next) {
    const { title, category } = req.body;
    const UserId = req.currentUserId;
    Category.findOne({
      where: { name: category }
    })
      .then(data => {
        if (data) {
          console.log('DATA=>>', data);
          const dataKanban = { title, CategoryId: data.id, UserId };
          return Kanban.create(dataKanban)
        } else {
          next({
            status: 400,
            message: 'Category does not exist'
          })
        }
      })
      .then(data => {
        res.status(200).json({ message: 'Success create data' });
      })
      .catch(next)
  }

  static update(req, res, next) {
    const { title, category } = req.body;
    const { id } = req.params;
    const UserId = req.currentUserId;
    Category.findOne({
      where: { name: category }
    })
      .then(data => {
        if (data) {
          const dataKanban = { title, CategoryId: data.id, UserId };
          return Kanban.update(dataKanban, {
            where: { id }
          });
        } else {
          next({
            status: 400,
            message: 'Category does not exist'
          })
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