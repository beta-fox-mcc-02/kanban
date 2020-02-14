const router = require('express').Router()
const TaskController = require('../controllers/taskController.js')
const { authorization } = require('../middlewares/secureUserValidator.js')

router.get('/findall', TaskController.findAll)
router.post('/create', TaskController.create)

router.get('/update/:id', authorization, TaskController.render_updateform)
router.put('/update/:id', authorization, TaskController.update)

router.delete('/delete/:id', authorization, TaskController.delete)

module.exports = router