const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/task-controller');
const auth = require('../middlewares/authentication');

router.use(auth.authentication);
router.post('/task/:CategoryId', TaskController.create);
router.get('/task/category/:CategoryId', TaskController.findAll);
router.get('/task/:id', TaskController.findOne);
router.delete('/task/:id/delete', TaskController.delete);
router.patch('/task/:id/update', TaskController.update);
router.patch('/task/:id/update-category', TaskController.updateCategory);

module.exports = router;