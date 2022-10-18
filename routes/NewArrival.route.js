const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

const { enterNewArrival,
        getNewArrival,
        getNewArrivalById,
        getNewArrivalByPrice,
        updateNewArrival,
        removeNewArrival, } = require('../controllers');

router.post('/', auth, enterNewArrival);
router.get('/getNewArrival', getNewArrival);
router.get('/getNewArrivalById/:id', getNewArrivalById);
router.get('/getNewArrivalByPrice', getNewArrivalByPrice);
router.put('/updateNewArrival/:id', auth, updateNewArrival);
router.delete('/removeNewArrival/:id', auth, removeNewArrival);

module.exports = router;