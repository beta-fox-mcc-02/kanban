const router = require('express').Router()
const Task = require('../controllers/taskController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/', Task.getAllTask)
router.post('/', Task.createTask)

router.use('/:id', authorization)
router.get('/:id', Task.getOneTask)
router.put('/:id', Task.updateTask)
router.patch('/:id', Task.changeCategory)
router.delete('/:id', Task.deleteTask)

module.exports = router