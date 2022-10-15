const express = require('express');
const userController = require('../controllers/user.controllers');
const { userValidation } = require('../middlewares/user.validations');
const { tokenValidation } = require('../middlewares/token.validation');

const router = express.Router();

router.post('/', userValidation, userController.addUserController);
router.get('/', tokenValidation, userController.getAllUsersController);
router.delete('/me', tokenValidation, userController.deleteMyUser);
router.get('/:id', tokenValidation, userController.getUserById);

module.exports = router;