const bcrypt = require('bcryptjs')

module.exports = {
    hashPassword : (password) => {
        let salt = bcrypt.genSaltSync(10)
        let hash = bcrypt.hashSync(password, salt)
        return hash
    },
    comparePassword : (inputPassword, hash) => {
        return bcrypt.compareSync(inputPassword, hash)
    }
}
