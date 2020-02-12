const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/task')

router.post('/', TaskController.create)
router.get('/', TaskController.findAll)
router.get('/:id', TaskController.findOne)
router.put('/:id', TaskController.update)
router.delete('/:id', TaskController.remove)

module.exports = router