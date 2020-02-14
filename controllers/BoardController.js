const { Board } = require('../models')

class BoardController {
    static create(req, res, next) {
        const { title } = req.body

        const board = {
            title,
            UserId: req.jwtPayload.id
        }

        Board.create(board)
            .then(data => {
                res.status(201).json({ data })
            })
            .catch(next)
    }

    static findAll(req, res, next) {
        const id = 3
        Board.findAll({ where: { UserId: id } })
            .then(data => {
                res.status(200).json({ data })
            })
            .catch(next)
    }

    static findOne(req, res, next) {
        const { id } = req.params
        Board.findOne({ where: { id } }).then(data => {
            res.status(200).json({ data })
        })
    }

    static update(req, res, next) {
        const { id } = req.params

        const { title } = req.body

        Board.update({ title }, { where: { id }, returning: true })
            .then(result => {
                const data = result[1][0]
                res.status(200).json({ data })
            })
            .catch(next)
    }

    static delete(req, res, next) {
        const { id } = req.params

        Board.destroy({ where: { id } })
            .then(data => {
                res.status(200).json({ data })
            })
            .catch(next)
    }
}

module.exports = BoardController
