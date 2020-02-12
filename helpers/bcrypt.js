const bcrypt = require('bcryptjs')


module.exports = {
    hashPassword : (password) => {
        let salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    },
    checkPassword : (inputPassword, databasePassword) => {
        return bcrypt.compareSync(inputPassword, databasePassword)
    }
    

}