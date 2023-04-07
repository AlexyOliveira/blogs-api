const userService = require('../services/user.service');

const addUser = async (req, res) => {
  const userData = req.body;
  const response = await userService.addUser(userData);
  res.status(response.status).json(response.message);
};

module.exports = {
  addUser,
};
