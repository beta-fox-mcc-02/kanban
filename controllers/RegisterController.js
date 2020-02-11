const { User } = require('../models');
const { createToken } = require('../helpers/jwt');

class RegisterController {
  static register(req, res, next) {
    const { username, email, password } = req.body;
    const data = { username, email, password };
    User.create(data)
      .then(user => {
        const payload = { id: user.id };
        const access_token = createToken(payload);
        res.status(201).json({ access_token });
      })
      .catch(err => {
        console.log(err);
        next(err)
      })
  }
}

module.exports = RegisterController;