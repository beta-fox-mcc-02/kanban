const router = require('express').Router()
const ItemController = require('../controllers/ItemController')
const { checkAuth } = require('../middlewares/auth')

router.use(checkAuth)
router.post('/', ItemController.create)
router.get('/', ItemController.findAll)
router.get('/:id', ItemController.findOne)
router.patch('/:id', ItemController.update)
router.delete('/:id', ItemController.delete)

module.exports = router
