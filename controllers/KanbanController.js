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

  static findTaskById(req, res, next){
    const { id } = req.params;
    Kanban.findOne({
      where: {id}
    })
      .then(kanban => {
        res.status(200).json({data: kanban})
      })
      .catch(next)
  }

  static findByCategory(req, res, next) {
    const { CategoryId } = req.params;
    const UserId = req.currentUserId;
    Kanban.findAll({
      order: [['id', 'ASC']],
      where: { UserId, CategoryId },
      include: [Category]
    })
      .then(kanban => {
        res.status(200).json({ data: kanban });
      })
      .catch(next)
  }

  static create(req, res, next) {
    console.log(req.body);
    const { title, CategoryId } = req.body;
    const UserId = req.currentUserId;
    const dataKanban = { title, CategoryId, UserId }
    Kanban.create(dataKanban)
      .then(data => {
        res.status(200).json({ message: 'Success create data'})
      })
      .catch(next)
  }

  static update(req, res, next) {
    const { title, CategoryId } = req.body;
    const { id } = req.params;
    const UserId = req.currentUserId;
    const dataKanban = { title, CategoryId, UserId };
    console.log();
    Kanban.update(dataKanban, {
      where: {id}
    })
      .then(data => {
        res.status(200).json({ message: 'Success update data'})
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