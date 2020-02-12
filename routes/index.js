const router = require('express').Router()
const userRouter = require('./user')
const taskRouter = require('./task')

router.use('/', userRouter)
router.use('/tasks', taskRouter)

module.exports = router