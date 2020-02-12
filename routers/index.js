const express = require('express')
const router = express.Router()
const userRouter = require('./userRouter')
const taskRouter = require('./taskRouter')

router.get('/', (req, res) => {
    res.send('WELCOME TO KANBAN APPS')
})
router.use(userRouter)
router.use('/tasks', taskRouter)

module.exports = router