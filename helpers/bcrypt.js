const bcrypt = require('bcryptjs');

module.exports = {
  hashPassword(password) {
    return bcrypt.hashSync(password, +process.env.SALT);
  },

  validatePassword(password, hash) {
    return bcrypt.compareSync(password, hash);
  }
}