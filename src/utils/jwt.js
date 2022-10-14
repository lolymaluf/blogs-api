const jwt = require('jsonwebtoken');
require('dotenv/config');

const webToken = (userId, userEmail, userName) => {
  const secret = process.env.JWT_SECRET;

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { userId, userEmail, userName } }, secret, jwtConfig);
  // esta chave data foi renomeada como 'user' no token.validation ja posso buscar as info apenas com o user
  // sign para gerar token, 1º param é o payload, 2º chave pra criptografar 3º param é opcional, configurações do token acima
  return token;
};

const checkToken = (token) => {
  const secret = process.env.JWT_SECRET;
  const decodedToken = jwt.verify(token, secret);
  // primeiro param é o token, 2º é a chave pra descriptografar (exatamente o primeiro param do de cima)
  return decodedToken;
};

module.exports = { webToken, checkToken };
