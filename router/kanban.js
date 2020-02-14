const router = require('express').Router()
const { create, findAll, update, destroy } = require('../controller/kanban')
const authentication = require('../middlewares/authentication')
const authorized = require('../middlewares/authorized')

router.use(authentication)

router.get('/', findAll)
router.post('/', create)
router.put('/:id', authorized, update)
router.delete('/:id', authorized, destroy)

module.exports = router