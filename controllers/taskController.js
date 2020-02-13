const { Task, Category, User } = require('../models')
const jwt = require('jsonwebtoken')

class TaskController{
    static findAll(req, res, next) {
        Category.findAll({
            include: {
                model: Task,
                include: User
            }
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => next(err))
    }

    static create(req, res, next) {
        Task.create({
            title: req.body.title,
            CategoryId: 1,
            UserId: req.currentUserId,
            tag: req.body.tag
        })
        .then((data) => {
            res.status(201).json({ msg: `Successfully added ${data.title}` })
        })
        .catch((err) => next(err))
    }

    static delete(req, res, next) {
        Task.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(() => res.status(200).json({ msg: `Delete task on id ${req.params.id} success` }))
        .catch((err) => next(err))
    }
}

module.exports = TaskController