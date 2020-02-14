const { Task, User, Category } = require('../models')

class Kanban {
    static create(req, res, next) {
        const { title, description } = req.body
        const { id } = req.decoded
        Task.create({
            title, description, UserId: id , CategoryId: 1
        })
            .then(data => {
                console.log(data, 'data pak')
                res.status(201).json({
                    msg: "success create"
                })
            })
            .catch(err => {
                res.status(500).json({
                    err,
                    msg: "error create"
                })
            })
    }
    static findAll(req, res, next) {
        Task.findAll({ include: [User, Category], order: [["id", "ASC"]] })
            .then(data => {
                res.status(200).json({
                    data,
                    msg: 'success find all'
                })
            })
            .catch(err => {
                res.status(500).json({
                    err,
                    msg: 'error find all'
                })
            })
    }
    static update(req, res, next) {
        const { id } = req.params
        const { title, description } = req.body
        
        Task.update({ title, description }, { where: { id } })
            .then(data => {
                res.status(200).json({
                    msg: "success update"
                })
            })
            .catch(err => {
                res.status(500).json({
                    err,
                    msg: "error update"
                })
            })
    }
    static destroy(req, res, next) {
        const { id } = req.params

        Task.destroy({
            id
        })
            .then(() => {
                res.status(200).json({
                    msg: "success delete"
                })
            })
            .catch(err => {
                res.status(500).json({
                    err,
                    msg: "error destroy"
                })
            })
    }
}

module.exports = Kanban