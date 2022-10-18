const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

const { enterRefurbished,
        getRefurbished,
        getRefurbishedById,
        getRefurbishedByPrice,
        updateRefurbished,
        removeRefurbished, } = require('../controllers');

router.post('/', auth, enterRefurbished);
router.get('/getRefurbished', getRefurbished);
router.get('/getRefurbishedById/:id', getRefurbishedById);
router.get('/getRefurbishedByPrice', getRefurbishedByPrice);
router.put('/updateRefurbished/:id', auth, updateRefurbished);
router.delete('/removeRefurbished/:id', auth, removeRefurbished);

module.exports = router;