const { Category, Task } = require('../models')

class Controller {
    static fetchAll(req, res, next) {
        Category.findAll({
            include: [ Task ],
            order: [['id', 'ASC']]
        })
            .then(response => {
                res.status(200).json({
                    msg: 'fetch all category successed',
                    data: response
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static findById(req, res, next) {
        const { id } = req.params

        Category.findOne({
            where: {
                id
            }
        })
            .then(response => {
                if (response) {
                    res.status(200).json({
                        msg: `success find category id:${id}`,
                        data: response
                    })
                } else {
                    res.status(404).json({
                        msg: 'Not Found'
                    })

                    // const err = {
                    //     name: 'notFound'
                    // }
                    // next(err)
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static create(req, res, next) {
        const { name } = req.body

        Category.create({
            name: name
        })
            .then(response => {
                res.status(201).json({
                    msg: 'success create category',
                    data: response
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static edit(req, res, next) {
        const { id } = req.params
        const { name } = req.body

        Category.update(
            {
                name: name
            },
            {
                where: {
                    id
                },
                returning: true
            }
        )
            .then(response => {
                if (response[0]) {
                    res.status(200).json({
                        msg: `success update category`,
                        data: response
                    })
                } else {
                    res.status(404).json({
                        msg: 'Not Found'
                    })

                    // const err = {
                    //     name: 'notFound'
                    // }
                    // next(err)
                }
            })
            .catch(err => {
                next(err)
            })
    }

    static delete(req, res, next) {
        const { id } = req.params

        Category.destroy({
            where: {
                id
            }
        })
            .then(response => {
                if (response) {
                    res.status(200).json({
                        msg: 'success delete category'
                    })
                } else {
                    res.status(404).json({
                        msg: 'Not Found'
                    })

                    // const err = {
                    //     name: 'notFound'
                    // }
                    // next(err)
                }
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = Controller