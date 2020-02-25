const bcrypt = require('bcryptjs')

class BcryptPassword{
    static hashing (pass) {
        let salt = bcrypt.genSaltSync(10)
        let hashed = bcrypt.hashSync(pass, salt)
        return hashed
    }

    static comparing (inputPass, hashedPass) {
        let result = bcrypt.compareSync(inputPass, hashedPass)
        return result
    }
}

module.exports = BcryptPassword