const { User } = require('../models');
const tokenGenerator = require('../utils/jwt/auth');

const addUser = async ({ email, displayName, password, image }) => {
  const message = { message: 'User already registered' };
  console.log(email);
  const userEmail = await User.findOne({ where: { email } });
  if (userEmail) {
    return {
      status: 409,
      message,
    };
  }
  const tokenGenerated = tokenGenerator({ email });
  const userData = {
    status: 201,
    message: {
      token: tokenGenerated,
    },
  };

  await User.create({ displayName, email, password, image });

  return userData;
};

module.exports = {
  addUser,
};
