const express = require('express');

const router = express.Router();

const { enterNewArrival,
        getNewArrival,
        getNewArrivalById,
        updateNewArrival,
        removeNewArrival, } = require('../controllers');

router.post('/', enterNewArrival);
router.get('/getNewArrival', getNewArrival);
router.get('/getNewArrivalById/:id', getNewArrivalById);
router.put('/updateNewArrival/:id', updateNewArrival);
router.delete('/removeNewArrival/:id', removeNewArrival);

module.exports = router;