const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/taskController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.use(authentication)
router.get('/', TaskController.fetchAll)
router.get('/:id', authorization, TaskController.findById)
router.post('/', TaskController.create)
router.put('/:id', authorization, TaskController.edit)
router.delete('/:id', authorization, TaskController.delete)

module.exports = router