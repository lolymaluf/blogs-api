const { BlogPost, User, Category } = require('../models');  

/* const addNewPost = async (name) => {
  ...
  ...
  ...
}; */

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
  console.log('USER ID', userId);
  console.log('USER AUTHOR', userAuthor);

  if (userId !== userAuthor) {
    return { status: 401, message: 'Unauthorized user' };
  }

  const post = await BlogPost.update({ title, content }, { where: { id } });
  return post;
};

module.exports = {
  // addNewPost,
  getPosts,
  getPostById,
  changePost,
};