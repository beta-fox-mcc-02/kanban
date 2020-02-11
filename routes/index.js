const router = require('express').Router()
const user = require('../controllers/userController')
const {auth} = require('../middlewares/authentification')
const org = require('../routes/organization')
const task = require('../routes/task')
const err = require('../middlewares/errorHandler')

router.post('/login', user.login)
router.post('/register', user.register)
router.use(auth)
router.post('/accept', user.accept)
router.use('/organizations', org)
router.use('/tasks', task)
router.use(err)

module.exports = router