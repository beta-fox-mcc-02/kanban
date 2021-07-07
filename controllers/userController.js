const { User, Task } = require('../models')
const { generateToken } = require('../helpers/jwt')
const { comparePassword } = require('../helpers/bcrypt')
const { OAuth2Client } = require('google-auth-library')

class Controller {
    static fetchAll(req, res, next) {
        User.findAll({
            include: [ Task ],
            order: [['id', 'ASC']]
        })
            .then(response => {
                res.status(200).json({
                    msg: 'success fetch users',
                    data: response
                })
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static signUp(req, res, next) {
        const { email, password } = req.body
        User.create({
            email: email,
            password: password
        })
            .then(response => {
                const payload = {
                    id: response.id,
                    email: response.email
                }

                const token = generateToken(payload)

                res.status(200).json({
                    msg: 'sign up success',
                    token
                })
            })
            .catch(err => {
                console.log(err.name)
                next(err)
            })
    }

    static signIn(req, res, next) {
        const { email, password } = req.body
        
        User.findOne({
            where: {
                email
            }
        })
            .then(response => {
                if (response) {
                    const comparePw = comparePassword(password, response.password)
                    if (comparePw) {
                        const payload = {
                            id: response.id,
                            email: response.email
                        }

                        const token = generateToken(payload)
                        
                        res.status(200).json({
                            msg: 'sign in success',
                            token
                        })
                    } else {
                        res.status(400).json({
                            msg: 'invalid email or password'
                        })
                    }
                } else {
                    res.status(400).json({
                        msg: 'invalid email or password'
                    })
                }
            })
            .catch(err => {
              next(err)  
            })
    }

    static gSignIn(req, res, next) {
        const id_token = req.headers.id_token
        const client_id = process.env.CLIENT_ID
        const secret_password = process.env.SECRET_PASSWORD
        const client = new OAuth2Client(client_id)

        let userEmail = ''

        client.verifyIdToken({
            idToken: id_token,
            audience: client_id
        })
            .then(response => {
                const payload = response.getPayload()
                userEmail = payload.email
                return User.findOne({
                    where: {
                        email: userEmail
                    }
                })
            })
            .then(response => {
                if (!response) {
                    return User.create({
                        email: userEmail,
                        password: secret_password
                    })
                } else {
                    return response
                }
            })
            .then(response => {
                const payload = {
                    id: response.id,
                    email: response.email
                }
                const newUserToken = generateToken(payload)
                res.status(200).json({
                    msg: 'sign in success',
                    token: newUserToken
                })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = Controller