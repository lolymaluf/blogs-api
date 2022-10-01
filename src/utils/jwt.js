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

/* const jwt = require('jsonwebtoken');
require('dotenv/config');

const webToken = ({ id, displayName, email }) => {
  const payload = {
    id,
    displayName,
    email,
  };

  const jwtSecret = process.env.JWT_SECRET || 'xaBlau';

  const jwtConfig = {
    expiresIn: '1000min',
    algorithm: 'HS256',
  };

  const token = jwt.sign(payload, jwtSecret, jwtConfig);

  return token;
};

module.exports = { webToken }; */