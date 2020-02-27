const express = require('express')
const router = express.Router()
const user = require('./userRoutes')
const task = require('./taskRoutes')
const category = require('./categoryRoutes')

router.get('/', (req, res) => {
    res.send('WE ARE CONNECTED')
})
router.use('/', user)
router.use('/tasks', task)
router.use('/categories', category)

module.exports = router