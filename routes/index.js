const router = require('express').Router()
const userRouter = require('./userRouter')

router.get('/', (req, res) => {
    res.send('Welcome to KANBAN API.')
})

router.use('/users', userRouter)

module.exports = router
