const { Category, Task } = require('../models')

class CategoryController {
    
    static getAll(req, res, next) {
        console.log('MASUK CATEGORY CONTROLLER')
        Category.findAll({
            include : Task
        })
            .then(categories => {
                console.log('MASUK THEN')
                res.status(200).json({
                    msg : 'Get All Categories Succussfully',
                    data : categories
                })
            })
            .catch(next)
    }
}

module.exports = CategoryController