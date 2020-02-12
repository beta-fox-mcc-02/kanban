const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController')

router.get('/', UserController.fetchAll)
router.post('/register', UserController.register)

module.exports = router