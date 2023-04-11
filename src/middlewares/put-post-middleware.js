const postPutValidates = (req, res, next) => {
    const { title, content } = req.body;
    const emptFields = { message: 'Some required fields are missing' };
    if (!title || !content) {
      return res.status(400).json(emptFields); 
    }
    next();
};

module.exports = postPutValidates;