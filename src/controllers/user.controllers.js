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

/* const addUserController = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const user = await userService.addUserController(displayName, email, password, image);
  return res.status(201).json(user);
};

module.exports = {
  addUserController,
}; */

/* const addUserController = async (req, res) => {  
  const { type, message, token } = await userService.inserNewUserService(req.body);

  if (type === 201) {
    return res.status(type).json({ token });
  }

  if (type === 400) {
    res.status(type).json({ message });
  }
};

module.exports = { addUserController }; */