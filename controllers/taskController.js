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
                        CategoryId: req.body.category,
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

    

}

module.exports = TaskController