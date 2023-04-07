const loginService = require('../services/login.services');

const addUser = async (req, res) => {
const userData = req.body;
const data = await loginService.addUser(userData);
res.status(data.status).json(data.message);
};

module.exports = {
    addUser,
};