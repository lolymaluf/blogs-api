const express = require('express');
const userController = require('../controllers/user.controllers');
const { userValidation } = require('../middlewares/user.validations');
const { tokenValidation } = require('../middlewares/token.validation');

const router = express.Router();

router.post('/', userValidation, userController.addUserController);
router.get('/', tokenValidation, userController.getAllUsersController);

module.exports = router;