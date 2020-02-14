const { User, BoardAssignment } = require('../models')

class BoardAssignmentController {
    static create(req, res, next) {
        const { email, BoardId } = req.body

        User.findOne({ where: { email } })
            .then(result => {
                if (result) {
                    const boardAssignment = {
                        UserId: result.id,
                        BoardId
                    }
                    BoardAssignment.create(boardAssignment)
                        .then(data => {
                            res.status(201).json({ data })
                        })
                        .catch(next)
                } else {
                    next({
                        name: 'usernotfound'
                    })
                }
            })
            .catch(next)
    }

    static findAll(req, res, next) {
        const { ListId } = req.query
        Card.findAll({
            where: { ListId },
            include: [
                {
                    model: Item
                }
            ]
        })
            .then(data => {
                res.status(200).json({ data })
            })
            .catch(next)
    }

    static findOne(req, res, next) {
        const { id } = req.params
        Card.findOne({
            where: { id },
            include: [
                {
                    model: Item
                }
            ]
        })
            .then(data => {
                res.status(200).json({ data })
            })
            .catch(e => {
                console.log(e)
            })
    }

    static update(req, res, next) {
        const { id } = req.params

        const { description } = req.body

        Card.update({ description }, { where: { id }, returning: true })
            .then(result => {
                const data = result[1][0]
                res.status(200).json({ data })
            })
            .catch(next)
    }

    static delete(req, res, next) {
        const { id } = req.params

        Card.destroy({ where: { id } })
            .then(data => {
                res.status(200).json({ data })
            })
            .catch(next)
    }
}

module.exports = BoardAssignmentController
