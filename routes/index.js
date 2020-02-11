const router = require('express').Router();
const registerRouter = require('./register');
const loginRouter = require('./login');
const kanbanRouter = require('./kanban');

// router
router.use('/register', registerRouter);
router.use('/login', loginRouter);
router.use('/kanban', kanbanRouter);

module.exports = router;