const bcrypt = require("bcryptjs")

class BcryptPassword {
    static hash(password) {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt)
        return hash
    }

    static check(password, hashedPassword) {
        return bcrypt.compareSync(password, hashedPassword)
    }
}

module.exports = BcryptPassword