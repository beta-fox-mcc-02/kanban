const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/taskController')

router.get('/', TaskController.fetchAll)
router.get('/:id', TaskController.findById)
router.post('/', TaskController.create)
router.put('/:id', TaskController.edit)
router.delete('/:id', TaskController.delete)

module.exports = router