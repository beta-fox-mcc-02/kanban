const router = require('express').Router()
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')
const CategoryController = require('../controllers/categoryController')

router.use(authentication)
router.get('/', CategoryController.findOne)

module.exports = router