const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

const { enterPCGamer,
        getPCGamer,
        getPCGamerById,
        getPCGamerByPrice,
        updatePCGamer,
        removePCGamer, } = require('../controllers');

router.post('/', auth, enterPCGamer);
router.get('/getPCGamer', getPCGamer);
router.get('/getPCGamerById/:id', getPCGamerById);
router.get('/getPCGamerByPrice', getPCGamerByPrice);
router.put('/updatePCGamer/:id', auth, updatePCGamer);
router.delete('/removePCGamer/:id', auth, removePCGamer);

module.exports = router;