const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync(+process.env.SALT)

module.exports = {
  hashing(password) {
    return bcrypt.hashSync(password, salt)
  },

  checkPassword(inputPassword, password) {
    return bcrypt.compareSync(inputPassword, password)
  }
}


