const express = require('express');
const router = express.Router();
const clientRouter = require('./Client.route');
const newArrivalRouter = require('./NewArrival.route');
const laptopRouter = require('./Laptop.route');

router.use('/client', clientRouter);
router.use('/newarrival', newArrivalRouter);
router.use('/laptop', laptopRouter);

module.exports = router;