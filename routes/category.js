const router = require('express').Router()
const { CategoryController } = require('../controllers')
const { isAuthenticated } = require('../middlewares')

router.use(isAuthenticated)
router.get('/', CategoryController.getCategories)

module.exports = router