const router = require('express').Router();
const DummyController = require('../controllers/DummyController');

router.get('/', DummyController.findAll);
module.exports = router;