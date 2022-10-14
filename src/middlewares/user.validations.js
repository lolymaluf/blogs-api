const userValidation = (req, res, next) => {
/*   console.log('CONSOLE', req.body.displayName.length); */
  if (req.body.displayName.length < 8) {
     return res.status(400)
     .json({ message: '"displayName" length must be at least 8 characters long' }); 
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(req.body.email)) {
     return res.status(400)
     .json({ message: '"email" must be a valid email' });
  }
  if (req.body.password.length < 6) {
     return res.status(400)
     .json({ message: '"password" length must be at least 6 characters long' }); 
  }

  next();
};

module.exports = {
  userValidation,
};
