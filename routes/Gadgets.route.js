const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

const { enterGadgets,
        getGadgets,
        getGadgetsById,
        getGadgetsByPrice,
        updateGadgets,
        removeGadgets, } = require('../controllers');

router.post('/', auth, enterGadgets);
router.get('/getGadgets', getGadgets);
router.get('/getGadgetsById/:id/:type', getGadgetsById);
router.get('/getGadgetsByPrice', getGadgetsByPrice);
router.put('/updateGadgets/:id', auth, updateGadgets);
router.delete('/removeGadgets/:id', auth, removeGadgets);

module.exports = router;