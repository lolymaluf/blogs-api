const { Category } = require('../models');
// const { webToken } = require('../utils/jwt');

const insertNewCategory = async (name) => {
  if (!name) return { status: 400, message: '"name" is required' };
  const { dataValues: newCategory } = await Category.create({ name });
  return { status: 201, newCategory };
};

const getAllCategories = async () => {
  const categories = await Category.findAll();
  return categories;
};

module.exports = {
  insertNewCategory,
  getAllCategories,
};