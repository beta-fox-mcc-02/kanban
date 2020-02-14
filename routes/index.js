const router  = require('express').Router()
const userRouter = require('./users')
const tasksRouter = require('./tasks')
const categoryRouter = require('./categories')

router.get('/', (req, res) => {
   res.send('home')
})

router.use('/users', userRouter)
router.use('/categories', categoryRouter)
router.use('/tasks', tasksRouter)

router.get('/*', (req, res) => {
   res.send('Not found')
})

module.exports = router