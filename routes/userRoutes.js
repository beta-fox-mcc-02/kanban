const express = require('express')
const router = express.Router()
const UserController = require('../controllers/userController')

router.get('/', UserController.fetchAll)

module.exports = router