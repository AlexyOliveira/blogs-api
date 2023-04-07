const loginDataValidate = (req, res, next) => {
    const { email, password } = req.body;
    const emptFields = { message: 'Some required fields are missing' };
    if (!email || !password) {
      return res.status(400).json(emptFields); 
    }
    next();
};

module.exports = loginDataValidate;