const userService = require('../services/user.services');

const addUserController = async (req, res) => {
  /* const { displayName, email, password, image } = req.body; */
  const { status, message, token } = await userService.insertNewUserService(req.body);
   if (token) {
    return res.status(201).json({ token });
   }
   return res.status(status).json({ message });
};

const getAllUsersController = async (req, res) => {
  const users = await userService.getAllUsersService();
  // nao sei se tem que colocar parametro ainda
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserByIdService(id);
  if (!user) return res.status(404).json({ message: 'User does not exist' });
  return res.status(200).json(user);
};

const deleteMyUser = async (req, res) => {
  const token = req.headers.authorization;
  if (!token) return res.status(404).json();
  return res.status(204).json();
};

module.exports = { 
  addUserController,
  getAllUsersController,
  getUserById,
  deleteMyUser,
};
