const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/taskController')
const authentication = require('../middlewares/authetication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.post('/', TaskController.addTask)
router.get('/', TaskController.getAllTask)
router.get('/:id', TaskController.findById)
router.put('/:id', authorization, TaskController.edit)
router.delete('/:id', authorization, TaskController.delete)

module.exports = router