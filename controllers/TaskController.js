const { Task } = require('../models')

class TaskController {
    static create(req, res, next) {
        let payload = {
            title: req.body.title,
            category: `BACKLOG`,
            UserId: req.decoded.id
        }
        Task.create(payload) 
            .then((tasks) => {
                res.status(201).json({
                    data: tasks
                })
            })
            .catch((err) => {
                next(err)
            })
    }

    static findAll(req, res, next) {
        let UserId = +req.decoded.id
        Task.findAll({where: {UserId: UserId}})
            .then((tasks) => {
                res.status(200).json({
                    data: tasks
                })
            })
            .catch((err) => {
                next(err)
            })
    }

    static findOne(req, res, next) {
        let id = req.params.id
        Task.findByPk(id)
            .then((tasks) => {
                if (!tasks) {
                    let errObj = {
                        name: 'NOT FOUND',
                        errors: [{
                            message: 'ID does not exists'
                        }]
                    }
                    next(errObj)
                } else {
                    res.status(200).json({
                        data: tasks
                    })
                }
            })
            .catch((err) => {
                next(err)
            })
    }


    static update(req, res, next) {
        let id = req.params.id
        let payload = {
            title: req.body.title,
            category: req.body.category,
            UserId: req.decoded.id
        }

        Task.update(payload, {
            where: {id}, 
            returning:true
        })
            .then((tasks) => {
                if (!tasks) {
                    let errObj = {
                        name: 'NOT FOUND',
                        errors: [{
                            message: 'ID NOT FOUND'
                        }]
                    }
                    next(errObj)
                } else {
                    res.status(200).json({
                        data: tasks
                    })
                }
            })
            .catch((err) => {
                next(err)
            })
    }

    static delete(req, res, next) {
        let id = req.params.id
        let UserId = +req.decoded.id

        Task.destroy({where: {id: id, UserId: UserId}})
            .then((tasks) => {
                if (!tasks) {
                    let errObj = {
                        name: 'NOT FOUND',
                        errors: [{
                            message: 'ID NOT FOUND'
                        }]
                    }
                    next(errObj)
                } else {
                    res.status(200).json({
                        message: `task with id ${id} is deleted`,
                        data: tasks
                    })
                }
            })
            .catch((err) => {
                next(err)
            })
    }
}
module.exports = TaskController