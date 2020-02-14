const { User } = require('../models')
const { generateToken } = require('../helpers/jwt')
const { checkPassword } = require('../helpers/password')
const {OAuth2Client} = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)

class UserController {
    static register(req, res, next) {
        const { first_name, last_name, email, password } = req.body
        console.log(req.body)
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
                        console.log("MASUUUUKKKKKKKKKKKKKK")
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

    static googleLogin (req, res, next) {
        const token = req.headers.token
        let email = ""
        let first_name = ''
        let last_name = ''
        client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID
        })
            .then(data => {
                console.log(data)
                email = data.payload.email
                first_name = data.payload.given_name
                last_name = data.payload.family_name
                return User.findOne({
                    where: {
                        email
                    }
                })
            })
            .then(data => {
                if (!data) {
                    return User.create({
                        first_name,
                        last_name,
                        email,
                        password: process.env.PASSWORD 
                    })
                } else {
                    return data
                }
            })
            .then(data => {
                const token = generateToken({
                    email,
                    id: data.id
                })
                res.status(200).json({
                    token
                })
            })
            .catch(next)
    }

}

module.exports = UserController