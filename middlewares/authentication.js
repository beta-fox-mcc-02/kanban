const { validateToken } = require('../helpers/jwt');
const { User } = require('../models');

module.exports = function (req, res, next) {
  try {
    const { access_token } = req.headers;
    const decoded = validateToken(access_token);
    req.currentUserId = decoded.id;
    // check if user still exist

    User.findOne({
      where: { id: req.currentUserId }
    })
      .then(user => {
        if (user) {
          next();
        } else {
          next({ name: 'JsonWebTokenError' })
        }
      })
      .catch(next)

  } catch (err) {
    next(err);
  }
}