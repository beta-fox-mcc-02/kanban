const { User } = require('../models')
const { generateToken } = require('../helpers/jwt')
const { checkPassword } = require('../helpers/password')

class UserController {
    static register(req, res, next) {
        const { first_name, last_name, email, password } = req.body
        User.create({
            first_name, last_name, email, password
        })
            .then(user => {
                res.status(201).json({
                    msg: "Register success"
                })
            })
            .catch(err => {
                console.log(err)
                next(err)
            })
    }

    static login (req, res, next) {
        const { email, password } = req.body
        User.findOne({
            where: {
                email
            }
        })
            .then(user => {
                if (user === null) {
                    next({
                        status: 404,
                        msg: "Email/Password wrong"
                    })
                } else {
                    const check = checkPassword(password, user.password)
                    if (check) {
                        const token = generateToken({
                            id: user.id,
                            email: user.email,
                        })
                        res.status(200).json({
                            msg: 'login success',
                            token
                        })
                    } else {
                        next({
                            status: 404,
                            msg: "Email/Password wrong"
                        })
                    }
                }
            })
            .catch(err => {
                console.log(err)
                next(err)
            })
    }

}

module.exports = UserController