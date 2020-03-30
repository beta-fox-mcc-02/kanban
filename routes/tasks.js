const router = require('express').Router()
const TaskController = require('../controllers/TaskController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/taskAuthorization')

router.use(authentication)
// router.post('/:categoryId', TaskController.create)
router.post('/', TaskController.create)
router.get('/category/:categoryId', TaskController.findAll)

// router.use(authorization)
router.get('/:id', authorization, TaskController.findOne)
router.put('/:id', authorization, TaskController.update)
router.delete('/:id', authorization, TaskController.delete)


module.exports = router