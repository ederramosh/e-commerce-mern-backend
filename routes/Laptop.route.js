const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

const { enterLaptop,
        getLaptop,
        getLaptopById,
        updateLaptop,
        removeLaptop, } = require('../controllers')

router.post('/', auth, enterLaptop);
router.get('/getLaptop', getLaptop);
router.get('/getLaptopById/:id', auth, getLaptopById);
router.put('/updateLaptop/:id', auth, updateLaptop);
router.delete('/removeLaptop/:id', auth, removeLaptop);

module.exports = router;