const bcrypt = require('bcryptjs')

module.exports = {
    hashPassword: (password) => {
        const salt = bcrypt.genSaltSync(+process.env.SALT)
        const hash = bcrypt.hashSync(password, salt)
        return hash
    }, 
    checkPassword: (passwordclient, passwordserver) => {
        return bcrypt.compareSync(passwordclient, passwordserver)
    }
}