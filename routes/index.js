const express = require('express')
const router = express.Router()

const taskRoutes = require('./tasks')
const apiRoutes = require('./apiRoute')

const UserController = require('../controllers/UserController')
const authentication = require('../middlewares/authentication')

//register & login
router.post('/googleSignIn', UserController.gSign)
router.post('/register', UserController.register)
router.post('/login', UserController.login)

// //api
router.use('/api', apiRoutes)

// //authentication
router.use(authentication) 

// //tasks
router.use('/tasks', taskRoutes)

module.exports = router