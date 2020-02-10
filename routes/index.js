const router = require('express').Router()
const MainController = require('../controllers/index');
const UserController = require('../controllers/userController')

router.post('/login', UserController.login)
router.post('/register', UserController.register)
router.get('/testNaruto', MainController.testKanban)

module.exports = router