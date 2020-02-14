const express = require('express')

const UserController = require('../controllers/userController')
const TaskController = require('../controllers/taskController')

const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

const router = express.Router()

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.post('/googlelogin', UserController.googleLogin)

router.post('/tasks', authentication, TaskController.create)
router.get('/tasks', authentication, TaskController.readTask)
router.delete('/tasks/:id', authentication, authorization, TaskController.delete)
router.put('/tasks/:id', authentication, authorization, TaskController.update)

module.exports = router