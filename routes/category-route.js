const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/category-controller');
const auth = require('../middlewares/authentication');

router.use(auth.authentication);
router.post('/category', CategoryController.create);
router.get('/category', CategoryController.findAll);
router.get('/category/:id', CategoryController.findOne);
// router.delete('/task/:id/delete', CategoryController.delete);
// router.patch('/task/:id/update', CategoryController.update);
// router.patch('/task/:id/update-category', CategoryController.updateCategory);

module.exports = router;