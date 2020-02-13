const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/taskController')
const authentication = require('../middlewares/authentication')

router.post('/', authentication, TaskController.create)
router.delete('/:id', authentication, TaskController.delete)
router.put('/:id', authentication, TaskController.update)

module.exports = router