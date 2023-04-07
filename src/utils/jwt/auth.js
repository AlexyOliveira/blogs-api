const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;
const configJwt = {
    expiresIn: '1m',
    algorithm: 'HS256',
};

const tokenGenerator = (payload) => {
   const token = jwt.sign(payload, secretKey, configJwt);
   return token;
};

module.exports = tokenGenerator;