const { User } = require('../models')
const { comparePassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')

class UserController {
    static register(req, res, next) {
        let payload = {
            name : req.body.name, 
            email : req.body.email,
            password : req.body.password
        }
        User.create(payload)
            .then(user => {
                res.status(201).json(user)
            })
            .catch(next)
    }

    static login(req, res, next) {
        console.log('MASUK LOGIN CONTROLLER')
        let payload = {
            email : req.body.email,
            password : req.body.password
        }
        User.findOne({
            where : {
                email : payload.email
            }
        })
            .then(user => {
                
                if (user) {
                    let status = comparePassword(payload.password, user.password)
                    if (status) {
                        let dataUser = {
                            id: user.id,
                            name: user.name,
                            email: user.email
                        }
                        let token = generateToken(dataUser)
                        console.log('DAPET TOKEN DI CONTROLLER LOGIN', token)
                        res.status(200).json({
                            access_token : token
                        })
                    }
                } else {
                    next({
                        name : "ErrorLogin",
                        msg : "Invalid Email/Password"
                    })
                }
            })
            .catch(next)
    }

}

module.exports = UserController