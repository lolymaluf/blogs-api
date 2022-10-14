const categoryService = require('../services/category.services');

const addCategory = async (req, res) => {
  const { name } = req.body;
  const { status, message, newCategory } = await categoryService.insertNewCategory(name);
  if (status === 400) return res.status(status).json({ message });
  return res.status(status).json(newCategory);
};

const getAllCategories = async (req, res) => {
  const categories = await categoryService.getAllCategories();
  return res.status(200).json(categories);
};

module.exports = { addCategory, getAllCategories };