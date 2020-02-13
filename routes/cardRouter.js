const router = require('express').Router()
const CardController = require('../controllers/CardController')
const { checkAuth } = require('../middlewares/auth')

router.use(checkAuth)
router.post('/', CardController.create)
router.get('/', CardController.findAll)
router.get('/:id', CardController.findOne)
router.patch('/:id', CardController.update)
router.delete('/:id', CardController.delete)

module.exports = router
