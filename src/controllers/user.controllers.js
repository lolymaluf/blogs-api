const userService = require('../services/user.services');

const addUserController = async (req, res) => {
  /* const { displayName, email, password, image } = req.body; */
  const { status, message, token } = await userService.insertNewUserService(req.body);
   if (token) {
    return res.status(201).json({ token });
   }
   return res.status(status).json({ message });
};

module.exports = { addUserController };
