const { Kanban } = require('../models');

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
      where: { category, UserId }
    })
      .then(kanban => {
        res.status(200).json({ data: kanban });
      })
      .catch(next)
  }

  static create(req, res, next) {
    const { title, category } = req.body;
    const UserId = req.currentUserId;
    const data = { title, category, UserId };
    Kanban.create(data)
      .then(kanban => {
        res.status(200).json({ message: 'Success create data' });
      })
      .catch(next)
  }

  static update(req, res, next) {
    const { title, category } = req.body;
    const { id } = req.params;
    const data = { title, category };
    Kanban.update(data, {
      where: { id }
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