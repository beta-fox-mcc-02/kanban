const router = require('express').Router();
const KanbanController = require('../controllers/KanbanController');
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization');


// authentication
router.use(authentication);
// router
router.get('/', KanbanController.findAll);
router.get('/:CategoryId', KanbanController.findByCategory);
router.post('/', KanbanController.create);
router.put('/:id', authorization, KanbanController.update);
router.delete('/:id', authorization, KanbanController.destroy);


module.exports = router;