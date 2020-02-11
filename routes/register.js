const router = require('express').Router();
const RegisterController = require('../controllers/RegisterController');

// router
router.post('/', RegisterController.register);

module.exports = router;