const express = require('express');
const userController = require('../controllers/user.controllers');
const { userValidation } = require('../middlewares/user.validations');

const router = express.Router();

router.post('/', userValidation, userController.addUserController);

module.exports = router;