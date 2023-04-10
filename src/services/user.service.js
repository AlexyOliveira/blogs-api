const { User } = require('../models');
const token = require('../utils/jwt/auth');

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
  const tokenGenerated = token.tokenGenerator({ email });
  const userData = {
    status: 201,
    message: {
      token: tokenGenerated,
    },
  };

  await User.create({ displayName, email, password, image });

  return userData;
};

const getAllUsers = async () => {
    const allUsers = await User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
   return allUsers;
  };

  const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: ['id', 'displayName', 'email', 'image'] });
  const message = { message: 'User does not exist' };
  if (!user) {
    return {
      status: 404,
      message,
    };
  }
  return {
    status: 200,
    message: user,
  };
  };

module.exports = {
  addUser,
  getAllUsers,
  getUserById,
};
