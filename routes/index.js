const router = require('express').Router()
const user = require('../controllers/userController')
const {auth} = require('../middlewares/authentification')
const org = require('../routes/organization')
const task = require('../routes/task')
const err = require('../middlewares/errorHandler')

router.post('/login', user.login)
router.post('/register', user.register)
router.use(auth)
router.post('/invite', user.invite)
router.get('/userInvitation', user.userInvitation)
router.post('/accept', user.accept)
router.delete('./refuse', user.refuse)
router.use('/organizations', org)
router.use('/tasks', task)
router.use(err)

module.exports = router