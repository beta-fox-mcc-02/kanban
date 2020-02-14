const router = require('express').Router()
const { register, login, gSignIn } = require('../controller/user')

router.post('/register', register)
router.post('/login', login)
router.post('/gsignin', gSignIn)

module.exports = router