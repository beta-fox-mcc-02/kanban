const bcrypt = require('bcryptjs')

module.exports = {
   encryptPass : password => {return bcrypt.hashSync(password, +process.env.SALT)},
   decryptPass : (oldPass, userPass) => {return bcrypt.compare(oldPass, userPass)}
}