const express = require('express');
const router = express.Router();

const CategoryRoutes = require('./CategoryRoutes.js');
const TaskRoutes = require('./TaskRoutes.js');
const UserRoutes = require('./UserRoutes.js');

router.get('/', (req, res) => {
    res.send('Welcome')
})
router.use('/category', CategoryRoutes);
router.use('/board', TaskRoutes); 
router.use('/users', UserRoutes);

module.exports = router;