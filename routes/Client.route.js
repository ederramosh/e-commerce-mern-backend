const express = require('express');

const router = express.Router();

const {
    signUpClient,
    login,
    findByEmail,
    updateClient,
    removeClient,
} = require('../controllers');

router.post('/', signUpClient);
router.post('/login', login);
router.get('/findByEmail', findByEmail);
router.put('/updateByEmail', updateClient);
router.delete('/removeByEmail', removeClient);

module.exports = router;