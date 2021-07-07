const express = require('express')
const router = express.Router()
const CategoryController = require('../controllers/categoryController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/', CategoryController.fetchAll)
router.get('/:id', authorization, CategoryController.findById)
router.post('/', CategoryController.create)
router.put('/:id', authorization, CategoryController.edit)
router.delete('/:id', authorization, CategoryController.delete)

module.exports = router