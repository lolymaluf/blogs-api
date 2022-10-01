const loginServices = require('../services/login.services');

const loginController = async (req, res) => {  
  const { status, message, token } = await loginServices.userService(req.body);

  if (status === 200) {
    return res.status(status).json({ token });
  }

  if (status === 400) {
    res.status(status).json({ message });
  }
};

module.exports = { loginController };