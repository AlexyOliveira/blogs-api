const jwt = require('jsonwebtoken');
const { BlogPost, User, Category, PostCategory } = require('../models');

const message = { message: 'one or more "categoryIds" not found' };

const verifyCategories = async (categoryIds) => {
  const allCategories = await Category.findAll({
    attributes: ['id'],
    raw: true,
  });
  const onlyIds = allCategories.map((cat) => cat.id);
  const isId = categoryIds.every((cat) => onlyIds.includes(cat));
  return isId.toString();
};

const addNewPost = async ({ title, content, categoryIds }, userToken) => {
  const isFalse = await verifyCategories(categoryIds);
  if (isFalse === 'false') return { status: 400, message };
  const decode = jwt.decode(userToken);
  const user = await User.findOne({ where: { email: decode.email } });
  const post = await BlogPost.create({
    title,
    content,
    userId: user.dataValues.id,
  });
  categoryIds.map((cat) => PostCategory.create({ postId: post.id, categoryId: cat }));
  return { status: 201, message: post };
};

const getBlogPosts = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [
      {
        model: User,
        as: 'user',
        attributes: ['id', 'displayName', 'email', 'image'],
      },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return blogPosts;
};

const getPostById = async (id) => {
  const blogPostById = await BlogPost.findByPk(Number(id), {
    include: [
      {
        model: User,
        as: 'user',
        attributes: ['id', 'displayName', 'email', 'image'],
      },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  if (!blogPostById) {
    return {
      status: 404,
      message: { message: 'Post does not exist' },
    };
  }
  return { status: 200, message: blogPostById };
};

const putPostById = async (postId, token, userData) => {
  const { title, content } = userData;
  const decode = jwt.decode(token);
  const searchUserId = await User.findOne({ where: { email: decode.email } });
  const userId = searchUserId.id;
  const blogPostById = await BlogPost.findByPk(Number(postId));
  if (blogPostById.userId !== userId) {
    return { status: 401, message: { message: 'Unauthorized user' } };
  }
  await BlogPost.update({
    title,
    content,
  }, {
    where: {
      id: +postId,
    },
  });
  const userReturn = getPostById(postId); 
   return userReturn;
};

module.exports = {
  addNewPost,
  getBlogPosts,
  getPostById,
  putPostById,
};
