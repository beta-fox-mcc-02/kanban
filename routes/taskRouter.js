const router = require('express').Router()
const TaskController = require('../controllers/taskController.js')
const { authorization } = require('../middlewares/secureUserValidator.js')

router.get('/', TaskController.findAll)
router.post('/', TaskController.create)

router.get('/:id', authorization, TaskController.render_updateform)
router.put('/:id', authorization, TaskController.update)

router.delete('/:id', authorization, TaskController.delete)

module.exports = router