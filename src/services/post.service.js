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
   const h = await verifyCategories(categoryIds);
   if (h === 'false') return { status: 400, message };
    const decode = jwt.decode(userToken);
    const user = await User.findOne({ where: { email: decode.email } });
    const post = await BlogPost.create({
    title,
    content,
    userId: user.dataValues.id,
  });
  const formattedPost = { id: post.id,
    title: post.title,
    content: post.content,
    userId: post.userId,
    updated: post.updated,
    published: post.published,
  };
  return { status: 201, message: formattedPost };
};

module.exports = {
  addNewPost,
};
