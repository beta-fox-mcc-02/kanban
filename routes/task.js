const router = require('express').Router()
const { TaskController } = require('../controllers')
const { isAuthenticated, isAuthorizationed } = require('../middlewares')

router.use(isAuthenticated)
router.post('/', TaskController.addTask)
router.get('/category/:category_id', TaskController.getAllTask)

router.use('/:id', isAuthorizationed)
router.get('/:id', TaskController.getTask)
router.put('/:id', TaskController.updateTask)
router.delete('/:id', TaskController.deleteTask)

module.exports = router