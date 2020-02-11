const { User } = require('../models')
const BcryptPassword = require('../helpers/bcryptPassword.js')

class UserController{
    static register(req, res, next) {

    }
    
    static login(req, res, next) {
        let isPassValid = BcryptPassword.comparing(`input password`, `on-database password`)
    }

    static googleLogin(req, res, next) {
        
    }
}

module.exports = UserController