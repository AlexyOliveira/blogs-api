const categoryService = require('../services/categories.service');

const addCategory = async (req, res) => {
    const userData = req.body;
    const response = await categoryService.addCategory(userData);
    res.status(201).json(response);
  };

  const getAllCategories = async (_req, res) => {
    const categories = await categoryService.getAllCategories();
    res.status(200).json(categories);
  };

  module.exports = {
    addCategory,
    getAllCategories,
  };