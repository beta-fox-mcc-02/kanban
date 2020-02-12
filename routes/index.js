const router = require('express').Router()
const auth = require('./auth')

router.get('/', (req, res) => {
  res.send('Welcome to Kanban API')
})

router.use('/auth', auth)

module.exports = router