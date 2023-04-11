const express = require('express');
const authToken = require('../middlewares/auth-token-middleware');
const newPostValidations = require('../middlewares/new-post-middleware');
const postController = require('../controllers/post.controller');

const router = express.Router();

router.get('/', authToken, postController.getBlogPosts);
router.post('/', authToken, newPostValidations, postController.addNewPost);

module.exports = router;