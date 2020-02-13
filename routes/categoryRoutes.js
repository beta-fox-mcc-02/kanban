const express = require('express')
const router = express.Router()
const CategoryController = require('../controllers/categoryController')

router.get('/', CategoryController.fetchAll)
router.get('/:id', CategoryController.findById)
router.post('/', CategoryController.create)
router.put('/:id', CategoryController.edit)
router.delete('/:id', CategoryController.delete)

module.exports = router