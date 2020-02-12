const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/task')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.post('/', TaskController.create)
router.get('/', TaskController.findAll)
router.get('/:id', authorization, TaskController.findOne)
router.put('/:id', authorization, TaskController.update)
router.delete('/:id', authorization,  TaskController.remove)

module.exports = router