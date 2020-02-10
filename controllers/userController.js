const { User } = require('../models')
const { generateToken } = require('../helpers/jwt')

class UserController {
    static register(req, res, next) {
        const { first_name, last_name, email, password } = req.body
        User.create({
            first_name, last_name, email, password
        })
            .then(user => {
                const token = generateToken({
                    id: user.id,
                    email: user.email
                })
                res.status(201).json({
                    token
                })
            })
            .catch(err => {
                next(err)
            })
    }

}

module.exports = UserController