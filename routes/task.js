const router = require('express').Router()
const taskController = require('../controllers/taskController')

router.get('/', taskController.readAll)
router.get('/category', taskController.readCategory)
router.post('/', taskController.insert)
router.post('/', taskController.friend)
router.put('/:id', taskController.update)
router.delete('/:id', taskController.delete)
router.post('/category', taskController.category)
router.get('/search', taskController.allUser)

module.exports = router