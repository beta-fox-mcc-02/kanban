const router = require('express').Router()
const { TaskController } = require('../controllers')
const { isAuthenticated, isTaskAuthorizationed, isCategoryAuthorizationed } = require('../middlewares')

router.use(isAuthenticated)
router.post('/', TaskController.addTask)

router.use('/category/:id', isCategoryAuthorizationed)
router.get('/category/:category_id', TaskController.getAllTask)

router.use('/:id', isTaskAuthorizationed)
router.get('/:id', TaskController.getTask)
router.put('/:id', TaskController.updateTask)
router.delete('/:id', TaskController.deleteTask)

module.exports = router