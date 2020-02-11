const router = require('express').Router()
const taskController = require('../controllers/taskController')

router.get('/', taskController.readAll)
router.post('/', taskController.insert)
router.post('/', taskController.friend)
router.put('/', taskController.update)
router.delete('/', taskController.delete)
router.post('/category', taskController.category)

module.exports = router