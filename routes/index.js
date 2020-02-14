const router = require('express').Router()
const userRoutes = require('./user')
const categoryRoutes = require('./category')
const taskRoutes = require('./task')

router.use('/users', userRoutes)
router.use('/categories', categoryRoutes)
router.use('/tasks', taskRoutes)

module.exports = router
