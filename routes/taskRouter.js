const router = require('express').Router()
const taskController = require ('../controllers/taskController')


router.get('/', taskController.getAll)
router.post('/', taskController.add)
router.delete('/:id', taskController.remove)
router.put('/:id', taskController.updateStatus)

module.exports = router