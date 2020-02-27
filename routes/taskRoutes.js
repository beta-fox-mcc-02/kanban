const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.get('/', TaskController.getTasks)
router.post('/', TaskController.addTask)
router.put('/:id', TaskController.editTask)
router.delete('/:id', TaskController.deleteTask)
router.patch('/next/:id', TaskController.nextTask)
router.patch('/previous/:id', TaskController.previousTask)

module.exports = router