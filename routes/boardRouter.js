const router = require('express').Router()
const BoardController = require('../controllers/BoardController')
const { checkAuth } = require('../middlewares/auth')

router.use(checkAuth)
router.post('/', BoardController.create)
router.get('/', BoardController.findAll)
router.get('/:id', BoardController.findOne)
router.patch('/:id', BoardController.update)
router.delete('/:id', BoardController.delete)

module.exports = router
