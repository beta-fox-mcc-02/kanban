const router = require('express').Router()
const TaskController = require('../controllers/taskController.js')
const { authorization } = require('../middlewares/secureUserValidator.js')

router.get('/findall', TaskController.findAll)
router.post('/create', TaskController.create)
router.delete('/delete/:id', authorization, TaskController.delete)

module.exports = router