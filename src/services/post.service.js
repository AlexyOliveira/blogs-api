const jwt = require('jsonwebtoken');
const { BlogPost, User, Category } = require('../models');

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
  const formattedPost = {
    id: post.id,
    title: post.title,
    content: post.content,
    userId: post.userId,
    updated: post.updated,
    published: post.published,
  };
  return { status: 201, message: formattedPost };
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

module.exports = {
  addNewPost,
  getBlogPosts,
};
