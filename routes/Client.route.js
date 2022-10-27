const express = require('express');
const auth = require('../middleware/auth');

const router = express.Router();

const {
    signUpClient,
    login,
    findById,
    updateClient,
    removeClient,
} = require('../controllers');

router.post('/', signUpClient);
router.post('/login', login);
router.get('/findById', auth, findById);
router.put('/updateByEmail', auth, updateClient);
router.delete('/removeByEmail', auth, removeClient);

module.exports = router;