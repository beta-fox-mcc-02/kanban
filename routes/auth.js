const router = require('express').Router()
const User = require('../controllers/userController')
const emailValidation = require('../middlewares/emailValidation')

router.post('/register', emailValidation ,User.register)
router.post('/login', User.login)
router.post('/googleSign', User.googleSign)
router.get('/verification/:token', User.verifyAccount)

module.exports = router