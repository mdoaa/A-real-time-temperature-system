const express = require('express');
const { register, login,Add_Data, get } = require('../controllers/auth');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/Add_Data', Add_Data);
router.get('/getall',get)

module.exports = router;