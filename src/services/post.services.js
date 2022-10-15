// const { Op } = require('sequelize');

const { BlogPost, User, Category, PostCategory } = require('../models');

const addNewPost = async (title, content, categoryIds, userId) => {
  const getCategories = await Category.findAll();
  
  const categories = getCategories.filter((category) => categoryIds.includes(category.id));
  console.log('CATEGORIESSSSS', categories);
  if (categories.length === 0) {
    return { status: 400, message: '"categoryIds" not found' };
  }

  const newPost = await BlogPost
  .create({ title, content, userId, published: new Date(), updated: new Date() });
  
  const mapCategories = categories.map((category) => PostCategory.create({
    postId: newPost.id,
    categoryId: category.id }));
  await Promise.all(mapCategories);
  return { status: 201, newPost };
};

const getPosts = async () => {
  const posts = await BlogPost.findAll({ include: [{
    model: User,
    as: 'user',
    attributes: { exclude: ['password'] },
  },
  { model: Category,
    as: 'categories',
  },
],
});
  return posts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findOne({ where: { id }, 
    include: [{
    model: User,
    as: 'user',
    attributes: { exclude: ['password'] },
  },
  { model: Category,
    as: 'categories',
  },
],
});
  return post;
};

const changePost = async (id, title, content, userAuthor) => {
  const { userId } = await BlogPost.findOne({ where: { id } });
/*   console.log('USER ID', userId);
  console.log('USER AUTHOR', userAuthor); */

  if (userId !== userAuthor) {
    return { status: 401, message: 'Unauthorized user' };
  }

  const post = await BlogPost.update({ title, content }, { where: { id } });
  return post;
};

const deletePost = async (id, userAuthor) => {
  const { userId } = await BlogPost.findOne({ where: { id } });
  console.log('USER ID', userId);
  console.log('USER AUTHOR', userAuthor);

  if (userId !== userAuthor) {
    return { status: 401, message: 'Unauthorized user' };
  }

  await BlogPost.destroy({ where: { id } });
  return { status: 204 };
};

/* const deletePost = async (id) => {
  await BlogPost.destroy({ where: { id } });
  return { status: 204 };
}; */

/* const searchPosts = async (string) => {
  const posts = await BlogPost.findAll({
      where: {
        [Op.or]: [{ title: { [Op.like]: `%${string}%` } }, 
                   { content: { [Op.like]: `%${string}%` } },
      ] },
      include: [
        { model: User,
          as: 'user', 
          attributes: { exclude: ['password'] },
        },
        {
          model: Category,
          as: 'categories',
          through: { attributes: [] },
        },
      ],
  });

   return posts;
}; */

module.exports = {
  addNewPost,
  getPosts,
  getPostById,
  changePost,
  deletePost,
  // searchPosts,
};