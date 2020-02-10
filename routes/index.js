const router = require('express').Router();
const dummyRouter = require('./dummy');

router.use('/dummy', dummyRouter);
module.exports = router;