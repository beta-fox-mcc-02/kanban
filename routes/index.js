const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('Welcome to Kanban API')
})

module.exports = router