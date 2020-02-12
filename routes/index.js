const router = require('express').Router()
const auth = require('./auth')
const task = require('./tasks')

router.get('/', (req, res) => {
  res.send('Welcome to Kanban API')
})

router.use('/auth', auth)
router.use('/task', task)

module.exports = router