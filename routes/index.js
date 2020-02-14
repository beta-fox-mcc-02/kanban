const router = require('express').Router()
const userRouter = require('./userRouter')
const boardRouter = require('./boardRouter')
const listRouter = require('./listRouter')
const cardRouter = require('./cardRouter')
const itemRouter = require('./itemRouter')
const assignRouter = require('./boardAssignmentRouter')

router.get('/', (req, res) => {
    res.send('Welcome to KANBAN API.')
})

router.use('/users', userRouter)
router.use('/boards', boardRouter)
router.use('/lists', listRouter)
router.use('/cards', cardRouter)
router.use('/items', itemRouter)
router.use('/assign', assignRouter)

module.exports = router
