const express = require('express')
const router = express.Router()
const CategoryController = require('../controllers/CategoryController')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.get('/', CategoryController.getCategories)
router.get('/:id/tasks', CategoryController.getOneCategory)

module.exports = router