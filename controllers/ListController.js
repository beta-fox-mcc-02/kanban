const { List } = require('../models')

class ListController {
    static create(req, res, next) {
        const { title, BoardId } = req.body

        const list = {
            title,
            BoardId
        }

        List.create(list)
            .then(data => {
                res.status(201).json({ data })
            })
            .catch(next)
    }

    static findAll(req, res, next) {
        const { BoardId } = req.query
        List.findAll({ where: { BoardId } })
            .then(data => {
                res.status(200).json({ data })
            })
            .catch(next)
    }

    static findOne(req, res, next) {
        const { id } = req.params
        List.findOne({ where: { id } }).then(data => {
            res.status(200).json({ data })
        })
    }

    static update(req, res, next) {
        const { id } = req.params

        const { title } = req.body

        List.update({ title }, { where: { id }, returning: true })
            .then(result => {
                const data = result[1][0]
                res.status(200).json({ data })
            })
            .catch(next)
    }

    static delete(req, res, next) {
        const { id } = req.params

        List.destroy({ where: { id } })
            .then(data => {
                res.status(200).json({ data })
            })
            .catch(next)
    }
}

module.exports = ListController
