const postServices = require('../services/post.service');

const addNewPost = async (req, res) => {
    const userData = req.body;
    const userToken = req.headers.authorization;
   const serviceReturn = await postServices.addNewPost(userData, userToken);
   res.status(serviceReturn.status).json(serviceReturn.message);
};

const getBlogPosts = async (_req, res) => {
  const result = await postServices.getBlogPosts();
  res.status(200).json(result);
};

const getPostById = async (req, res) => {
    const { id } = req.params;
    const result = await postServices.getPostById(id);
    res.status(result.status).json(result.message);
  };

  const putPostById = async (req, res) => {
    const { id } = req.params;
    const { authorization } = req.headers;
    const userData = req.body;
    const result = await postServices.putPostById(id, authorization, userData);
    res.status(result.status).json(result.message);
  };

  const deletPostById = async (req, res) => {
    const { id } = req.params;
    const { authorization } = req.headers;
    const result = await postServices.deletPostById(+id, authorization);
    res.status(result.status).json(result.message);
  };

  const searchPost = async (req, res) => {
    const { q } = req.query;
    const { status, message } = await postServices.searchPost(q);
    return res.status(status).json(message);
  };

module.exports = {
    addNewPost,
    getBlogPosts,
    getPostById,
    putPostById,
    deletPostById,
    searchPost,
};