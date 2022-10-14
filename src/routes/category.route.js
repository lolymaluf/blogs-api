const express = require('express');
const categoryController = require('../controllers/category.controllers');
const { tokenValidation } = require('../middlewares/token.validation');

const router = express.Router();

router.post('/', tokenValidation, categoryController.addCategory);

module.exports = router;