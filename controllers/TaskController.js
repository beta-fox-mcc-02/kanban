const { Task } = require('../models')

class TaskController {
    static addTask (req, res, next) {
        const { title, description } = req.body
        const UserId = req.currentUserId
        Task.create({ UserId, title, description })
            .then(todo => {
                res.status(201).json({
                    data: todo,
                    msg: 'Todo has been successfully created'
                })
            })
            .catch(next)
    }

    static getTasks (req, res, next) {
        const UserId = req.currentUserId
        console.log(UserId, '===============')
        Task.findAll({ where: { UserId } })
            .then(todos => {
                res.status(200).json(todos)
            })
            .catch(next)
    }

    static getOneTask (req, res, next) {
        Task.findByPk(req.params.id)
            .then(todo => {
                if(!todo) {
                    res.status(404).json({
                        msg: 'Data not found'
                    })
                }
                else {
                    res.status(200).json(todo)
                }
            })
            .catch(next)
    }

    static editTask (req, res, next) {
        const id = req.params.id
        const { title, description } = req.body
        Task.update({ title, description }, {
            where: { id },
            returning: true
        })
            .then(todo => {
                if(!todo[0]) {
                    res.status(404).json({
                        msg: 'Data not found'
                    })
                }
                else {
                    res.status(200).json(todo[1])
                }
            })
            .catch(next)
    }
    
    static nextTask (req, res, next) {
        const id = req.params.id

        Task.findByPk(req.params.id)
            .then(data => {
                // let categoryNumber = Number(data.CategoryId)
                // let updateStatus = categoryNumber + 1
                // console.log(updateStatus, data.CategoryId, typeof data.CategoryId, 'UPDATE STATUSS')
                Task.update({ CategoryId: data.CategoryId + 1 }, {
                    where: { id },
                    returning: true
                })
                    .then(todo => {
                        if(!todo[0]) {
                            res.status(404).json({
                                msg: 'Data not found'
                            })
                        }
                        else {
                            res.status(200).json(todo[1])
                        }
                    })
                    .catch(next)
            })
    }

    static previousTask (req, res, next) {
        const id = req.params.id

        Task.findByPk(req.params.id)
            .then(data => {
                // let categoryNumber = Number(data.CategoryId)
                // let updateStatus = categoryNumber + 1
                // console.log(updateStatus, data.CategoryId, typeof data.CategoryId, 'UPDATE STATUSS')
                Task.update({ CategoryId: data.CategoryId -1 }, {
                    where: { id },
                    returning: true
                })
                    .then(todo => {
                        if(!todo[0]) {
                            res.status(404).json({
                                msg: 'Data not found'
                            })
                        }
                        else {
                            res.status(200).json(todo[1])
                        }
                    })
                    .catch(next)
            })
    }

    static deleteTask (req, res, next) {
        const id = req.params.id
        Task.destroy({ where: { id } })
            .then(deleted => {
                if(!deleted) {
                    res.status(404).json({
                        msg: 'Data not found'
                    })
                }
                else {
                    res.status(200).json({
                        msg: 'Task has been successfully deleted'
                    })
                }
            })
            .catch(next)
    }
}

module.exports = TaskController
