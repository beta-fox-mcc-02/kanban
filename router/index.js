const router = require('express').Router()
const user = require('./user')
const kanban = require('./kanban')

router.use('/', user)
router.use('/', kanban)

module.exports = router