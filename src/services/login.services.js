const { User } = require('../models');
const tokenGenerator = require('../utils/jwt/auth');

const addUser = async ({ email, password }) => {
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
  const tokenGenerated = tokenGenerator({ email });
  const userData = {
    status: 200,
    message: {
      token: tokenGenerated,
    },
  };

  return userData;
};

module.exports = {
  addUser,
};
