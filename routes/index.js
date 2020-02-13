const express = require ('express')
const router = express.Router()
const userRouter = require('./users')
const projectRouter = require ('./projects')
const taskRouter = require ('./tasks')

router.use('/users', userRouter)
router.use('/projects', projectRouter)
router.use('/tasks', taskRouter)


module.exports = router