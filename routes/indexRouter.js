const router = require('express').Router()
const taskRouter = require('./taskRouter.js')
const userRouter = require('./userRouter.js')
const { authentification } = require('../middlewares/secureUserValidator.js')

router.use('/user', userRouter)

router.use('/task', authentification, taskRouter)

module.exports = router