const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;
const configJwt = {
  expiresIn: '30m',
  algorithm: 'HS256',
};

const tokenGenerator = (payload) => {
  const token = jwt.sign(payload, secretKey, configJwt);
  return token;
};

const tokenValidate = (token) => {
  const tokenResult = jwt.verify(token, secretKey);
   return tokenResult;
};

module.exports = {
  tokenGenerator,
  tokenValidate,
};
