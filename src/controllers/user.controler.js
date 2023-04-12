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

  const getUserById = async (req, res) => {
    const { id } = req.params;
    const response = await userService.getUserById(id);
    res.status(response.status).json(response.message);
  };

  const deleteMyUser = async (req, res) => {
    const { authorization } = req.headers;
    const response = await userService.deleteMyUser(authorization);
    res.status(response.status).json(response.message);
  };

module.exports = {
  addUser,
  getAllUsers,
  getUserById,
  deleteMyUser,
};
