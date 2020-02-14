const router = require('express').Router()
const TaskController = require('../controllers/taskController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')
const CategoryController = require('../controllers/categoryController')

router.use(authentication)
router.get('/', TaskController.findByCategory)
router.post('/', TaskController.addTask)
router.put('/:id',authorization, TaskController.editTask)
router.delete('/:id',authorization, TaskController.deleteTask)
router.get('/categories', CategoryController.findOne)

module.exports = router