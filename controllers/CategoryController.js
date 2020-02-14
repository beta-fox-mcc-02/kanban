const { Category } = require('../models');

class CategoryController {
    static findAll(req, res, next) {
        Category.findAll({
            order: [['id', 'ASC']]
        })
            .then(data => {
                res.status(200).json({
                    data,
                    msg: 'Read Data Category success'
                })
            })
            .catch(next)
    }
}

module.exports = CategoryController;