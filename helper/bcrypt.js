const { User } = require('../models')
const bcrypt = require('bcryptjs')

class BcryptJs {
    static generate (password){
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(password, salt);
        return hash
    }
    static vertify (password,Hashpassword){
        const compare = bcrypt.compareSync(password,Hashpassword)
        return compare
    }
}

module.exports = BcryptJs