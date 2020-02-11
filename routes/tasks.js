const router = require('express').Router()
const TaskController = require('../controllers/TaskController')
const {authentication, authorization} = require('../middlewares/auth')

router.use(authentication) //check authentication

//find all tasks
router.get('/', TaskController.findAll)

//create a task
router.post('/', TaskController.create)

//get one task for update purpose
router.get('/:id/update', authorization, TaskController.findByPk)

//update a task
router.put('/:id/update', authorization, TaskController.update)

//delete a task
router.delete('/:id/delete', authorization, TaskController.delete)

module.exports = router