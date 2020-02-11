const router = require('express').Router()
const UserRoutes = require('./user')
const TaskRoutes = require('./task')

router.use(UserRoutes)
router.use('/tasks', TaskRoutes)


module.exports = router
