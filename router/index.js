const router = require('express').Router()
const user = require('./user')

router.get('/',(req,res)=>{
    res.send('hello worldie')
})
router.use('/', user)

module.exports = router