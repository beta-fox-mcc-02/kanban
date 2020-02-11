const router = require('express').Router()
const TaskController = require('../controllers/taskController')
const authentication = require('../middlewares/authentication')

router.use(authentication)
router.get('/', TaskController.findAll)
router.post('/', TaskController.createTask)

// need authorization here
router.patch('/:id', TaskController.changeCategory)
router.put('/:id', TaskController.updateTask)
router.delete('/:id', TaskController.deleteTask)


module.exports = router
