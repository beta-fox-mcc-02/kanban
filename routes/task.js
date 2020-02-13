const router = require('express').Router()
const { TaskController } = require('../controllers')
const { isAuthenticated } = require('../middlewares')


router.use(isAuthenticated)
router.post('/', TaskController.addTask)
router.get('/:category_id', TaskController.getAllTask)

module.exports = router