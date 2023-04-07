const { User } = require('../models');
const token = require('../utils/jwt/auth');

const login = async ({ email, password }) => {
  const userEmail = await User.findOne({ where: { email } });
  const userPass = await User.findOne({ where: { password } });
  const message = { message: 'Invalid fields' };
  if (!userEmail || !userPass) {
    const userData = {
      status: 400,
      message,
    };
    return userData;
  }
  const tokenGenerated = token.tokenGenerator({ email });
  const userData = {
    status: 200,
    message: {
      token: tokenGenerated,
    },
  };

  return userData;
};

module.exports = {
  login,
};
