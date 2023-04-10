const express = require('express');
 const categoryControler = require('../controllers/categories.controller');
// const addUserDataValidatons = require('../middlewares/add-user-validates');
const authToken = require('../middlewares/auth-token-middleware');
const nameValidate = require('../middlewares/add-category-validate');

const router = express.Router();

router.post('/', authToken, nameValidate, categoryControler.addCategory);
// router.get('/', authToken, userControler.getAllUsers);
// router.get('/:id', authToken, userControler.getUserById);

module.exports = router;