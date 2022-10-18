const express = require('express');
const router = express.Router();
const clientRouter = require('./Client.route');
const newArrivalRouter = require('./NewArrival.route');
const laptopRouter = require('./Laptop.route');
const pcGamer = require('./PCGamer.route');
const streamingEquipment = require('./StreamingEquipment.route');

router.use('/client', clientRouter);
router.use('/newarrival', newArrivalRouter);
router.use('/laptop', laptopRouter);
router.use('/pcgamer', pcGamer);
router.use('/streamingequipment', streamingEquipment);

module.exports = router;