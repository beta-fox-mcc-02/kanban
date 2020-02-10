const express = require('express');
const router = express.Router();
const UserRoutes = require('./UserRoutes.js');

router.get('/', (req, res) => {
    res.send('Welcome to Kanban');
})
router.use('/users', UserRoutes);


module.exports = router;