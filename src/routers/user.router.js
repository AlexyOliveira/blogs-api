const express = require('express');
const userControler = require('../controllers/user.controler');
const addUserDataValidatons = require('../middlewares/add-user-validates');
const authToken = require('../middlewares/auth-token-middleware');

const router = express.Router();

router.post('/', addUserDataValidatons, userControler.addUser);
router.get('/', authToken, userControler.getAllUsers);

module.exports = router;