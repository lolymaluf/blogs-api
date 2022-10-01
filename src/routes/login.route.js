const express = require('express');
const loginController = require('../controllers/login.controllers');
const { loginValidation } = require('../middlewares/login.validation');

const router = express.Router();

router.post('/', loginValidation, loginController.loginController);

module.exports = router;