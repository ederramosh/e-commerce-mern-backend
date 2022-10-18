const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

const { enterLaptop,
        getLaptop,
        getLaptopById,
        getLaptopByPrice,
        updateLaptop,
        removeLaptop, } = require('../controllers')

router.post('/', auth, enterLaptop);
router.get('/getLaptop', getLaptop);
router.get('/getLaptopById/:id', getLaptopById);
router.get('/getLaptopByPrice', getLaptopByPrice);
router.put('/updateLaptop/:id', auth, updateLaptop);
router.delete('/removeLaptop/:id', auth, removeLaptop);

module.exports = router;