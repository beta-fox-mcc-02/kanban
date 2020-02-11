const express = require('express')

const UserController = require('../controllers/userController')
const TaskController = require('../controllers/taskController')

const authentication = require('../middlewares/authentication')

const router = express.Router()

router.post('/register', UserController.register)
router.post('/login', UserController.login)

router.post('/tasks/add', authentication, TaskController.create)

module.exports = router