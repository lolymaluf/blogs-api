const express = require('express');
const postController = require('../controllers/post.controllers');
const { tokenValidation } = require('../middlewares/token.validation');

const router = express.Router();

/* router.post('/', tokenValidation, postController.addNewPost); */
router.get('/', tokenValidation, postController.getPosts);

module.exports = router;
