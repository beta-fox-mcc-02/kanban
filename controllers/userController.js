const {User} = require('../models')
const {comparePassword} = require('../helpers/bcrypt')
const {generateToken} = require('../helpers/jwt')
const {OAuth2Client} = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)

class UserController {
    static allUser(req, res, next) {
        User.findAll({
            attributes: {
                exclude: ['password']
            }
        })
            .then(users => {
                res.status(200).json(users)
            })
            .catch(err => {
                next(err)
            })
    }

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

    static getOneUser(req, res, next) {
        User.findOne({
            where: {
                id: req.decoded.id
            },
            attributes: {
                exclude: ['password']
            }
        })
            .then(user => {
                res.status(200).json(user)
            })
            .catch(err => {
                next(err)
            })
    }

    static gLogin(req, res, next) {
        let payload;
        client.verifyIdToken({
            idToken: req.headers.id_token,
            audience: process.env.CLIENT_ID
        })
            .then((ticket) => {
                payload = ticket.getPayload()
                return User.findOne({
                    where: {
                        email: payload.email
                    }
                })
            })
            .then(user => {
                if(user) {
                    return user
                } else {
                    return User.create({
                        name: payload.name,
                        email: payload.email,
                        password: process.env.GPWD
                    })
                }
            })
            .then(user => {
                let result = {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
                let token = generateToken(result)
                res.status(200).json({
                    access_token: token
                })
            })
            .catch(err => {
                next(err)
            })
    }

}

module.exports = UserController;