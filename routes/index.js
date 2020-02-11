const router = require('express').Router()

router.use('/users', require('./users'))
router.use('/tasks', require('./tasks'))
router.use('/', (req, res) => res.send("Hello"))

module.exports = router