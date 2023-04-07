const loginService = require('../services/login.services');

const login = async (req, res) => {
const userData = req.body;
const data = await loginService.login(userData);
res.status(data.status).json(data.message);
};

module.exports = {
    login,
};