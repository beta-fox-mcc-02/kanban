const router = require('express').Router()
const TaskController = require('../controllers/taskController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/', TaskController.findByCategory)
router.post('/', TaskController.addTask)
router.put('/:id',authorization, TaskController.editTask)
router.delete('/:id',authorization, TaskController.deleteTask)

module.exports = router