const express = require('express')
const router = express.Router()
const userRouter = require('./userRouter')

router.get('/', (req, res) => {
    res.send('WELCOME TO KANBAN APPS')
})
router.use(userRouter)

module.exports = router