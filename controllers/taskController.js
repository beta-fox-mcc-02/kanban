const { Task } = require('../models')

class TaskController{
    static findAll(req, res, next) {
        Task.findAll()
        .then(data => {
            res.status(200).json({ data })
        })
        .catch(err => next(err))
    }

    static create(req, res, next) {
        Task.create({
            title: req.body.title,
            category: req.body.category,
            UserId: req.body.UserId,
            tag: req.body.tag
        })
        .then((data) => {
            res.status(201).json({ msg: `Success added new task ${data.title}` })
        })
        .catch((err) => next(err))
    }
}

module.exports = TaskController