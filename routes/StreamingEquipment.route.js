const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

const { enterStreamingEquipment,
        getStreamingEquipment,
        getStreamingEquipmentById,
        getStreamingEquipmentByPrice,
        updateStreamingEquipment,
        removeStreamingEquipment, } = require('../controllers');

router.post('/', auth, enterStreamingEquipment);
router.get('/getStreamingEquipment', getStreamingEquipment);
router.get('/getStreamingEquipmentById/:id', getStreamingEquipmentById);
router.get('/getStreamingEquipmentByPrice', getStreamingEquipmentByPrice);
router.put('/updateStreamingEquipment/:id', auth, updateStreamingEquipment);
router.delete('/removeStreamingEquipment/:id', auth, removeStreamingEquipment);

module.exports = router;