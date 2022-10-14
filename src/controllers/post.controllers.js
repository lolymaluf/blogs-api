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

const getPostById = async (req, res) => {
  const { id } = req.params;
  const post = await postService.getPostById(id);
  if (!post) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(post);
};

const changePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  const post = await postService.changePost(id, title, content, req.user.userId);

  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  return res.status(200).json(post);
};

module.exports = { 
  // addNewPost, 
  getPosts,
  getPostById,
  changePost,
 };