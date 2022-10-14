const express = require('express');
const router = express.Router();
const clientRouter = require('./Client.route');

router.use('/client', clientRouter);

module.exports = router;