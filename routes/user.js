const router = require('express').Router()
const UserController = require('../controllers/userController')

router.post('/signup', UserController.signup)

module.exports = router
