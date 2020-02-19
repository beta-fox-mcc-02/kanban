const express = require('express')
const router = express.Router()
const userRouter = require('./userRouter')
const taskRouter = require('./taskRouter')
const categoryRouter = require('./categoryRouter')

router.get('/', (req, res) => {
    res.send('WELCOME TO KANBAN-IPUL APPS')
})
router.use(userRouter)
router.use('/tasks', taskRouter)
router.use('/categories', categoryRouter)

module.exports = router