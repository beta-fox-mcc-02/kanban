const { Category, Task } = require('../models')

class CategoryController {
    static getCategories (req, res, next) {
        console.log(req.currentUserId)
        Category.findAll()
            .then(categories => {
                res.status(200).json(categories)
            })
            .catch(next)
    }
    static getOneCategory (req, res, next) {
        Task.findAll({
            where: { 
                CategoryId: req.params.id,
                UserId: req.currentUserId
            }
        })
            .then(task => {
                if(!task) {
                    res.status(404).json({
                        msg: 'Data not found'
                    })
                }
                else {
                    res.status(200).json(task)
                }
            })
            .catch(next)
    }
}

module.exports = CategoryController