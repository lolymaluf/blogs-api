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

module.exports = {
    insertNewUserService,
};