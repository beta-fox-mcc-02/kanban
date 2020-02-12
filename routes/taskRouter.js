const router = require('express').Router()
const TaskController = require('../controllers/taskController.js')

router.get('/findall', TaskController.findAll)
router.post('/create', TaskController.create)

module.exports = router