const bcrypt = require('bcryptjs')


module.exports = {
    hashPassword : (password) => {
        let salt = bcrypt.genSaltSync(+process.env.SALT)
        return bcrypt.hashSync(password, salt)
    },
    checkPassword : (inputPassword, databasePassword) => {
        return bcrypt.compareSync(inputPassword, databasePassword)
    }
    

}