const router = require('express').Router();
const CategoryController = require('../controllers/CategoryController');
const authentication = require('../middlewares/authentication');

router.use(authentication);
router.get('/', CategoryController.findAll);
router.get('/:id', CategoryController.findOne);
router.post('/', CategoryController.create);
router.put('/:id', CategoryController.update);
router.delete('/:id', CategoryController.destroy);

module.exports = router;