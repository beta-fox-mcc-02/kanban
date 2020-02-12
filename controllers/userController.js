const {User} = require('../models')
const {comparePassword} = require('../helpers/bcrypt')
const {generateToken} = require('../helpers/jwt')

class UserController {
    static register(req, res, next) {
        let input = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
        User.create(input)
            .then(user => {
                let result = {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
                res.status(201).json(result)
            })
            .catch(err => {
                next(err)
            })
    }

    static login(req, res, next) {
        User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(user => {
                if(user) {
                    let checkPassword = comparePassword(req.body.password, user.password)
                    if(checkPassword) {
                        let payload = {
                            id: user.id,
                            name: user.name,
                            email: user.email
                        }
                        let token = generateToken(payload)
                        res.status(200).json({
                            access_token: token
                        })
                    } else {
                        next({
                            name: 'BadRequest',
                            message: 'username / password incorrect'
                        })
                    }
                } else {
                    next({
                        name: 'BadRequest',
                        message: 'username / password incorrect'
                    })
                }
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = UserController;