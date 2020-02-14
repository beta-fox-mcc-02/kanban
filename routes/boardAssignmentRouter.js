const router = require('express').Router()
const BoardAssignmentController = require('../controllers/BoardAssignmentController')
const { checkAuth } = require('../middlewares/auth')

router.use(checkAuth)
router.post('/', BoardAssignmentController.create)
// router.get('/', BoardAssignmentController.findAll)
// router.get('/:id', BoardAssignmentController.findOne)
// router.patch('/:id', BoardAssignmentController.update)
// router.delete('/:id', BoardAssignmentController.delete)

module.exports = router
