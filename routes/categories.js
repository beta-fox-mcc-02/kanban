const router = require('express').Router()
const CategoryController = require('../controllers/CategoryController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/categoryAuthorization')

router.use(authentication)
router.get('/', CategoryController.findAll)
router.post('/', CategoryController.create)
router.use('/:id', authorization)
router.get('/:id', CategoryController.findOne)
router.put('/:id', CategoryController.update)
router.delete('/:id', CategoryController.delete)


module.exports = router