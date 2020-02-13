const {Task, User, Category} = require('../models')

class TaskController {
    static create (req, res, next) {
        Category.findByPk(req.body.category)
            .then(category => {
                if (!category) {
                    next({
                        status: 404,
                        msg: "category salah"
                    })
                } else {
                    return Task.create({
                        title: req.body.title,
                        CategoryId: 1,
                        UserId: req.currentUserId

                    })
                }
            })
            .then(task => {
                res.status(201).json({
                    msg: 'create task suksess'
                })
            })
            
            .catch(next)
    }

    static readTask (req, res, next) {
        Task.findAll({
            where: {
                UserId: req.currentUserId
            }, include: [User, Category]
        })
            .then(tasks => {
                res.status(200).json({
                    tasks
                })
            })
            .catch(next)
    }

    static delete(req, res, next) {
        Task.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(data => {
                res.status(200).json({
                    msg: "Succes deleted task"
                })
            })
            .catch(next)
    }
}

module.exports = TaskController