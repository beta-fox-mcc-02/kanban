const router = require('express').Router()
const userRouter = require('./userRouter')
const boardRouter = require('./boardRouter')

router.get('/', (req, res) => {
    res.send('Welcome to KANBAN API.')
})

router.use('/users', userRouter)
router.use('/boards', boardRouter)

module.exports = router
