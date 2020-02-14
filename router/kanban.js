const router = require('express').Router()
const { create, findAll, update, destroy } = require('../controller/kanban')
const authentication = require('../middlewares/authentication')
const authorized = require('../middlewares/authorized')

router.use(authentication)

router.post('/', create)
router.get('/', findAll)
router.put('/:id', authorized, update)
router.delete('/:id', authorized, destroy)

module.exports = router