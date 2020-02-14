const { Item, Card } = require('../models')

class ItemController {
    static create(req, res, next) {
        const { title, CardId } = req.body

        const list = {
            title,
            CardId
        }

        Item.create(list)
            .then(data => {
                res.status(201).json({ data })
            })
            .catch(next)
    }

    static findAll(req, res, next) {
        const { CardId } = req.query
        Item.findAll({
            where: { CardId }
        })
            .then(data => {
                res.status(200).json({ data })
            })
            .catch(next)
    }

    static findOne(req, res, next) {
        const { id } = req.params
        Item.findOne({ where: { id } }).then(data => {
            res.status(200).json({ data })
        })
    }

    static update(req, res, next) {
        const { id } = req.params

        Item.findByPk(id)
            .then(result => {
                let status = false
                if (result.status) {
                    status = false
                } else {
                    status = true
                }

                Item.update(
                    { status },
                    { where: { id }, returning: true }
                )
                    .then(updated => {
                        const data = updated[1][0]
                        res.status(200).json({ data })
                    })
                    .catch(next)
            })
            .catch(next)
    }

    static delete(req, res, next) {
        const { id } = req.params

        Item.destroy({ where: { id } })
            .then(data => {
                res.status(200).json({ data })
            })
            .catch(next)
    }
}

module.exports = ItemController
