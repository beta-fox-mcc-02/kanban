const router = require('express').Router();
const registerRouter = require('./register');
const loginRouter = require('./login');
const kanbanRouter = require('./kanban');
const categoryRouter = require('./category');

// router
router.use('/register', registerRouter);
router.use('/login', loginRouter);
router.use('/kanban', kanbanRouter);
router.use('/category', categoryRouter);

module.exports = router;