const { User } = require('../models');
const { webToken } = require('../utils/jwt');

const insertNewUserService = async (body) => {
  const registeredUser = await User.findOne({ 
      where: { 
        email: body.email,
      } });
    if (registeredUser) return { status: 409, message: 'User already registered' };

    const { dataValues: newUser } = await User.create(body);
    const token = webToken(newUser);
    return { status: 201, token };
};

const getAllUsersService = async () => {
  const users = await User.findAll(
    { attributes: { exclude: ['password'] } },
    // para nao mostrar a senha publicamente
  );
  return users;
};

module.exports = {
    insertNewUserService,
    getAllUsersService,
};