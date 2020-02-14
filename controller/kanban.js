const { Task, User, Category } = require('../models')

class Kanban {
    static create(req, res, next) {
        const { title, description } = req.body
        const { id } = req.decoded
        Task.create({
            title, description, UserId: id, CategoryId: 1
        })
            .then(data => {
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
        const { id } = req.decoded
        console.log(req.decoded)
        Task.findAll({ include: [User, Category], order: [["id", "ASC"]], where:{ UserId:id } })
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
        const { title, description, CategoryId } = req.body
        console.log(CategoryId,'CategoryId pak')
        Task.update({ title, description, CategoryId }, { where: { id } })
            .then(data => {
                console.log(data,'suksesss');
                res.status(200).json({
                    msg: "success update",
                    data
                })
                
            })
            .catch(err => {
                console.log(err,'errrr')
                res.status(500).json({
                    err,
                    msg: "error update"
                })
            })
    }
    static destroy(req, res, next) {
        const { id } = req.params

        Task.destroy({ where: { id } })
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