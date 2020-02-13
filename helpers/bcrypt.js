const bcrypt = require('bcryptjs')

module.exports = {
   encryptPass : password => {return bcrypt.hash(password, process.env.SALT)},
   decryptPass : (oldPass, userPass) => {return bcrypt.compare(oldPass, userPass)}
}