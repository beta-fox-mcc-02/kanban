const express = require('express');
const router = express.Router();
const { UserController } = require('../controllers');
const authentication = require('../middlewares/authentication.js');
const authorization = require('../middlewares/authorization.js');

router.post('/login', UserController.login);
router.post('/signin', UserController.gSignIn);
router.post('/register', UserController.create);

module.exports = router;