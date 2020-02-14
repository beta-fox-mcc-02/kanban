const router = require('express').Router()
const userRouter = require('./user')
const taskRouter = require('./task')
const categoryRouter = require('./category')

router.use('/', userRouter)
router.use('/tasks', taskRouter)
router.use('/categories', categoryRouter)

module.exports = router