const loginValidation = async (req, res, next) => {
  const gotEmail = 'email' in req.body;
  const gotPassword = 'password' in req.body;
  const validEmail = req.body.email;
  const validPassword = req.body.password;

  if (!gotEmail || !gotPassword || !validEmail || !validPassword) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  next();
};

module.exports = { loginValidation };