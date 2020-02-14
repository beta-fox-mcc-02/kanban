const router = require('express').Router()
const taskRouter = require('./taskRouter')
const userRouter = require('./userRouter')
const projectRouter = require('../routes/projectRouter')

router.use('/user', userRouter)
router.use('/task', taskRouter)
router.use('/project', projectRouter)

module.exports= router
