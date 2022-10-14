const { BlogPost, User, Category } = require('../models');
// const { webToken } = require('../utils/jwt');

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

module.exports = {
  // addNewPost,
  getPosts,
};