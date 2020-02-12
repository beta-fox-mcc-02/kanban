const router = require('express').Router()
const User = require('../controllers/userController')

router.post('/register', User.register)

module.exports = router