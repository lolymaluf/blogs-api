const { User } = require('../models');
const { webToken } = require('../utils/jwt');

const userService = async (body) => {
  const user = await User.findOne({ where: { email: body.email, password: body.password } });

  if (user) {
    const token = webToken(user.id, user.email, user.displayName);
    return { status: 200, token };
  }

  return { status: 400, message: 'Invalid fields' };
};

  module.exports = { userService };