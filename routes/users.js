const router = require('express').Router()
const UserController = require('../controllers/UserController')

//login
router.post('/', UserController.login)

//register new user
router.post('/register', UserController.register)

//gsignin
router.post('/gsignin', UserController.gsignin)

module.exports = router