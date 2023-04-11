const postValidates = (req, res, next) => {
    const { title, content, categoryIds } = req.body;
    const emptFields = { message: 'Some required fields are missing' };
    if (!title || !content || !categoryIds) {
      return res.status(400).json(emptFields); 
    }
    next();
};

module.exports = postValidates;