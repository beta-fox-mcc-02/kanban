const router = require('express').Router()
const { CategoryController } = require('../controllers')
const { isAuthenticated, isCategoryAuthorizationed } = require('../middlewares')

router.use(isAuthenticated)
router.get('/', CategoryController.getCategories)

router.use('/:id', isCategoryAuthorizationed)
router.get('/:id', CategoryController.findOneCategory)
router.post('/', CategoryController.addCategory)
router.put('/:id', CategoryController.editCategory)

module.exports = router