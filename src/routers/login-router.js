const express = require('express');
const loginControler = require('../controllers/login.controler');
const loginDataValidate = require('../middlewares/login-validate-data');

const router = express.Router();

router.post('/', loginDataValidate, loginControler.addUser);

module.exports = router;