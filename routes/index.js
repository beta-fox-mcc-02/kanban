const router  = require('express').Router()
const userRouter = require('./users')
const tasksRouter = require('./tasks')
const categoryRouter = require('./categories')

router.get('/', (req, res) => {
   res.send('home')
})

router.use('/users', userRouter)
router.use('/tasks', tasksRouter)
router.use('/categories', categoryRouter)

router.get('/*', (req, res) => {
   res.send('Not found')
})

module.exports = router