const router = require('express').Router()
const auth = require('./auth')
const task = require('./tasks')
const category = require('./category')

router.get('/', (req, res) => {
  res.send('Welcome to Kanban API')
})

router.use('/auth', auth)
router.use('/task', task)
router.use('/category', category)

module.exports = router