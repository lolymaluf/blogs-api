const jwt = require('jsonwebtoken');
require('dotenv/config');

const webToken = (userId, userEmail, userName) => {
  const secret = process.env.JWT_SECRET;

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { userId, userEmail, userName } }, secret, jwtConfig);
  return token;
};

module.exports = { webToken };
