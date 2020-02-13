const router = require('express').Router()
const ListController = require('../controllers/ListController')
const { checkAuth } = require('../middlewares/auth')

router.use(checkAuth)
router.post('/', ListController.create)
router.get('/', ListController.findAll)
router.get('/:id', ListController.findOne)
router.patch('/:id', ListController.update)
router.delete('/:id', ListController.delete)

module.exports = router
