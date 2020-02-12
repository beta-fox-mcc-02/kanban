const router = require('express').Router()
const Task = require('../controllers/taskController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/', Task.getAllTask)
router.post('/', Task.createTask)

router.use('/:id', authorization)
router.get('/:id', Task.getOneTask)

module.exports = router