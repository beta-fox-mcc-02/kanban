const { Category } = require('../models')

const isCategoryAuthorizationed = (req, res, next) => {
  const id = +req.params.id
  const user_id = req.decoded
  Category.findOne({
    where: {
      id
    }
  })
    .then(category => {
      if (category) {
        if (category.user_id === user_id) {
          next()
        } else {
          next({
            status: 401,
            name: 'NOT_AUTHORIZED',
            message: 'You are not authorized to access this category'
          })
        }
      } else {
        next({
          status: 404,
          name: 'NOT_FOUND',
          message: 'Category not found with id ' + id
        })
      }
    })
    .catch(err => {
      next(err)
    })
}

module.exports = isCategoryAuthorizationed