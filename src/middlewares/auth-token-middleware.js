const { tokenValidate } = require('../utils/jwt/auth');

const authUser = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) res.status(401).send({ message: 'Token not found' });  
  try {
    tokenValidate(authorization); 
    next();
  } catch (error) {
    res.status(401).send({ message: 'Expired or invalid token' });
  }
};

module.exports = authUser;