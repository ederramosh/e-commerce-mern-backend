const express = require('express');
const router = express.Router();
const clientRouter = require('./Client.route');
const newArrivalRouter = require('./NewArrival.route');

router.use('/client', clientRouter);
router.use('/newarrival', newArrivalRouter);

module.exports = router;