const { Task, Category } = require('../models')
const jwt = require('jsonwebtoken')

class TaskController{
    static findAll(req, res, next) {
        Category.findAll({
            include: [Task]
        })
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => next(err))
    }

    static create(req, res, next) {
        let decoded = jwt.verify(req.headers.token, 'private key')
        Task.create({
            title: req.body.title,
            CategoryId: 1,
            UserId: decoded.id,
            tag: req.body.tag
        })
        .then((data) => {
            res.status(201).json({ msg: `Successfully added ${data.title}` })
        })
        .catch((err) => next(err))
    }
}

module.exports = TaskController