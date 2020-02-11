const router = require('express').Router()
const TaskController = require('../controllers/taskController.js')

router.get('/show', TaskController.findAll)

module.exports = router