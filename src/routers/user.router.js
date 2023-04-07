const express = require('express');
const userControler = require('../controllers/user.controler');
const addUserDataValidatons = require('../middlewares/add-user-validates');

const router = express.Router();

router.post('/', addUserDataValidatons, userControler.addUser);

module.exports = router;