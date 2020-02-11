const { User } = require('../models');
const { validatePassword } = require('../helpers/bcrypt');
const { createToken } = require('../helpers/jwt');

class LoginController {
  static login(req, res, next) {
    const { email, password } = req.body;
    const invalidLogin = { status: 400, message: 'Invalid email/password' };

    User.findOne({
      where: { email }
    })
      .then(user => {
        if (user) {
          const correctPassword = validatePassword(password, user.password);
          if (correctPassword) {
            const payload = { id: user.id };
            const access_token = createToken(payload);
            res.status(200).json({ access_token });
          } else {
            next(invalidLogin);
          }
        } else {
          next(invalidLogin);
        }
      })
      .catch(next)
  }
}

module.exports = LoginController;
