const { Category } = require('../models');

const addCategory = async ({ name }) => {
    // const message = { message: 'User already registered' };
   const insert = await Category.create({ name });
   return insert;
  };

  const getAllCategories = async () => {
   const categories = await Category.findAll();
   return categories;
  };

  module.exports = {
    addCategory,
    getAllCategories,
  };