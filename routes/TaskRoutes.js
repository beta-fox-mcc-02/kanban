const express = require('express');
const router = express.Router();
const { TaskController } = require('../controllers');
const authorization = require('../middlewares/authorization.js');
const authentication = require('../middlewares/authentication.js');

router.use(authentication);
router.get('/', TaskController.findAll);
router.post('/', TaskController.create);
router.get('/:id/tasks', TaskController.findByCategories);
router.patch('/:id/next', authorization,TaskController.nextLevel);
router.patch('/:id/change', authorization, TaskController.changeTitle);
router.get('/:id', TaskController.findId);
router.put('/:id', authorization, TaskController.update);
router.delete('/:id', authorization, TaskController.delete);

module.exports = router;