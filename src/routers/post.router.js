const express = require('express');
const authToken = require('../middlewares/auth-token-middleware');
const newPostValidations = require('../middlewares/new-post-middleware');
const putPostValidations = require('../middlewares/put-post-middleware');
const postController = require('../controllers/post.controller');

const router = express.Router();

router.get('/', authToken, postController.getBlogPosts);
router.get('/:id', authToken, postController.getPostById);
router.post('/', authToken, newPostValidations, postController.addNewPost);
router.put('/:id', authToken, putPostValidations, postController.putPostById);
router.delete('/:id', authToken, postController.deletPostById);

module.exports = router;