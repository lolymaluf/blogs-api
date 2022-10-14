const postService = require('../services/post.services');

/* const addNewPost = async (req, res) => {
...
...
...
}; */

const getPosts = async (req, res) => {
  const post = await postService.getPosts();
  return res.status(200).json(post);
};

module.exports = { 
  // addNewPost, 
  getPosts,
 };