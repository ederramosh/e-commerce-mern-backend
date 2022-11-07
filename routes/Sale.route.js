const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

const { submitSale,
        getAllSales,
        getSalesByDate } = require('../controllers');

router.post('/', auth, submitSale);
router.get('/', auth, getAllSales);
router.get('/getSalesByDate', auth, getSalesByDate);

module.exports = router;