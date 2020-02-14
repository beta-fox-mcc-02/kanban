const { Task, Category, User } = require('../models')
const { Op } = require('sequelize')

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

    static render_updateform(req, res, next) {
        let updateReadyTask = ''
        Task.findOne({
            where: {
                UserId: req.currentUserId,
                id: req.params.id
            }
        })
        .then(data => {
            updateReadyTask = data
            return Category.findAll({
                where: {
                    id: {
                        [Op.not]: data.CategoryId
                    }
                },
                attributes: ['name']
            })
        })
        .then((data) => {
            let categoryNames = []
            data.forEach(el => {
                categoryNames.push(el.name)
            })
            let packedData = { updateReadyTask, categoryNames }
            res.status(200).json(packedData)
        })
        .catch(err => next(err))
    }

    static update (req, res, next) {
        Task.findByPk(req.params.id)
        .then((data) => {
            if(!req.body.title) req.body.title = data.title
            if(!req.body.tag) req.body.tag = data.tag
            if(!req.body.category) req.body.category = data.CategoryId
            return req.body
        })
        .then((data) => {
            if (typeof data.category === typeof 1) return req.body
            else {
                return Category.findOne({ 
                    where: { name: data.category },
                    attributes: [ 'id' ]
                })
            }
        })
        .then((data) => {
            if(data.id) req.body.category = data.id
            return req.body
        })
        .then((data) => {
            return Task.update({
                title: data.title,
                CategoryId: data.category,
                UserId: req.currentUserId,
                tag: data.tag
            }, { 
                where: {
                    id: req.params.id
                },
                returning: true
             })
        })
        .then((data) => res.status(200).json(data))
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