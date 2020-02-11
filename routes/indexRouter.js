const router = require('express').Router()
const taskRouter = require('./taskRouter.js')
const userRouter = require('./userRouter.js')

router.use('/task', taskRouter)
router.use('/user', userRouter)

module.exports = router