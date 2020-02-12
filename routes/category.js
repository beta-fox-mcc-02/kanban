const router = require('express').Router()
const { Category, Task } = require('../models')

router.get('/', (req, res, next) => {
  Category.findAll({ include: Task })
    .then(categories => {
      res.status(200).json(categories)
    })
    .catch(next)
})

module.exports = router