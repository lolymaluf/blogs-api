const postService = require('../services/post.services');

/* const addNewPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { id: userId } = req.user;

  const newPost = await postService.addNewPost(title, content, categoryIds, userId);

  if (newPost.status) {
    return res.status(newPost.status).json({ message: newPost.message });
  }

  return res.status(201).json(newPost);
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
  /* console.log('changepostid', req.params); */
  const { id } = req.params;
  const { title, content } = req.body;

  const { status, message } = await postService.changePost(id, title, content, req.user.userId);
  const getPost = await postService.getPostById(id);

  if (status === 401) {
    return res.status(status).json({ message });
  }

  if (!title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  return res.status(200).json(getPost);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const post = await postService.getPostById(id);
  
  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }
  
  const { status, message } = await postService.deletePost(id, req.user.userId);
  console.log('STATUS', status);
  
  if (status === 401) {
    return res.status(status).json({ message });
  }

  return res.status(204).json();
};

module.exports = { 
  // addNewPost, 
  getPosts,
  getPostById,
  changePost,
  deletePost,
 };