const { User } = require("../models")
const bcrypt = require('../helper/bcrypt')
const jwt = require('../helper/jwt')
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);
class UserController {
    static register(req, res, next) {
        const { email, password } = req.body
        console.log(email)
        const input = {
            email,
            password
        }
        User.create(input)
            .then(data => {
                let token
                res.status(201).json(data)
            })
            .catch(err => {
                next(err)
            })
    }
    static login(req, res, next) {
        const { email, password } = req.body
        User.findOne({
            where: {
                email
            }
        })
            .then(data => {
                console.log(data)
                let decoded = {
                    email: data.email,
                    id : data.id
                }
                console.log(email)
                console.log(password)
                console.log(data.password)
                const validate = bcrypt.vertify(password, data.password)
                const token = jwt.generate(decoded)
                console.log(validate)
                if (validate) {
                    res.status(200).json(token)
                }
                else {
                    next({
                        name: "failLogin",
                        msg: "Your Password / Email doesn't exist/Wrong",
                        status: 400
                    })
                }
            })
            .catch(err => {
                next({
                    name: "failLogin",
                    msg: "Your Password / Email doesn't exist/Wrong",
                    status: 400
                })
            })
    }
    static gSignIn(req,res,next){
        let email = ''
        let username = ''
        client.verifyIdToken({
            idToken: req.headers.token,
            audience: process.env.CLIENT_ID
        })
            .then(data => {
                email = data.payload.email
                username = data.payload.name
                
                return User.findOne({ where: { email } })
            })
            .then(data => {
                if (!data) {
                    return User.create({
                        username,
                        email,
                        password: '123456789'
                    })
                } else {
                    return data
                }
            })
            .then(data => {
                let input = {
                    id : data.id,
                    email : data.email
                }
                const token = jwt.generate(input)
                res.status(200).json({
                    id: data.dataValues.id,
                    token
                })
            })
            .catch(err => console.log(err, 'error google sign in'))
    }
}

module.exports = UserController