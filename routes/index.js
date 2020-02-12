const router = require('express').Router()
const UserRoutes = require('./user')
const TaskRoutes = require('./task')
const ProjectRoutes = require('./project')

router.use(UserRoutes)
router.use('/tasks', TaskRoutes)
router.use('/projects', ProjectRoutes)


module.exports = router
