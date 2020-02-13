const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')
const authorization = require('../middlewares/authorization')

router.post('/', TaskController.create)
router.get('/', TaskController.findAll)

router.get('/:id', authorization, TaskController.findOne)
router.put('/:id', authorization, TaskController.update)
router.delete('/:id', authorization, TaskController.delete)

module.exports = router
