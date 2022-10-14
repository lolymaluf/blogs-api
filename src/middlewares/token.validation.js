const { checkToken } = require('../utils/jwt');

const tokenValidation = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decodedToken = checkToken(token);
    req.user = decodedToken.data;
    // aqui eu renomeio o payload do token para user, assim posso buscar as info apenas com o user transferindo de middleware pra outro

    next();
} catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { tokenValidation };