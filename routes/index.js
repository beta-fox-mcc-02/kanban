const express = require('express')
const router = express.Router()
const userRouter = require('./userRoutes')
const taskRouter = require('./taskRoutes')
const categoryRouter = require('./categoryRoutes')

router.use('/users', userRouter)
router.use('/tasks', taskRouter)
router.use('/categories', categoryRouter)

module.exports = router