const router = require('express').Router()
const TaskController = require('../controllers/TaskController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

// router.use(authentication)
router.get('/', TaskController.findAll)
router.post('/', TaskController.create)
router.get('/:id', TaskController.findOne)
router.put('/:id', TaskController.update)
// router.use(authorization)
router.delete('/:id', TaskController.delete)


module.exports = router