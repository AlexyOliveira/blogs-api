const nameValidate = (req, res, next) => {
    const userData = req.body;

    if (!userData.name) {
      return res.status(400).send({ message: '"name" is required' }); 
    }
    next();
};

module.exports = nameValidate;