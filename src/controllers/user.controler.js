const userService = require('../services/user.service');

const addUser = async (req, res) => {
  const userData = req.body;
  const response = await userService.addUser(userData);
  res.status(response.status).json(response.message);
};

const getAllUsers = async (_req, res) => {
    const response = await userService.getAllUsers();
    res.status(200).json(response);
  };

module.exports = {
  addUser,
  getAllUsers,
};
