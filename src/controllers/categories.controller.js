const categoryService = require('../services/categories.service');

const addCategory = async (req, res) => {
    const userData = req.body;
    const response = await categoryService.addCategory(userData);
    res.status(201).json(response);
  };

  module.exports = {
    addCategory,
  };