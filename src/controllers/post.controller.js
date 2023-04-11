const postServices = require('../services/post.service');

const addNewPost = async (req, res) => {
    const userData = req.body;
    const userToken = req.headers.authorization;
   const serviceReturn = await postServices.addNewPost(userData, userToken);
   res.status(serviceReturn.status).json(serviceReturn.message);
};

module.exports = {
    addNewPost,
};