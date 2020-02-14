const { User } = require('../models')

const { comparePassword, createToken } = require('../helpers/auth')
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)
class UserController {
    static register(req, res, next) {
        const { name, email, password } = req.body

        const user = {
            name,
            email,
            password
        }
        User.create(user)
            .then(result => {
                const payload = {
                    id: result.id,
                    name: result.name,
                    email: result.email
                }

                const message = 'Successfully logged in.'
                const token = createToken(payload)
                res.status(200).json({ token, message })
            })
            .catch(next)
    }
    static login(req, res, next) {
        const { email, password } = req.body

        User.findOne({ where: { email } })
            .then(result => {
                if (result) {
                    const isLogin = comparePassword(password, result.password)

                    if (isLogin) {
                        const payload = {
                            id: result.id,
                            name: result.name,
                            email: result.email
                        }
                        const message = 'Successfully logged in.'
                        const token = createToken(payload)
                        res.status(200).json({ token, message })
                    } else {
                        next({
                            name: 'wrongauth',
                            error: 'email / password not correct'
                        })
                    }
                } else {
                    next({
                        name: 'wrongauth',
                        error: 'email / password not correct'
                    })
                }
            })
            .catch(next)
    }
    static gSignIn(req, res, next) {
        const { id_token } = req.body
        client
            .verifyIdToken({
                idToken: id_token,
                audience: process.env.CLIENT_ID
            })
            .then(result => {
                const { email, family_name, given_name } = result.payload
                User.findOne({ where: { email } })
                    .then(user => {
                        if (user) {
                            const isGoogleAuth = comparePassword(
                                process.env.GOOGLE_PASSWORD,
                                user.password
                            )

                            if (isGoogleAuth) {
                                const payload = {
                                    id: user.id,
                                    email: user.email
                                }
                                const message = 'Successfully logged in.'
                                const token = createToken(payload)
                                res.status(200).json({ token, message })
                            } else {
                                res.status(400).json({
                                    message: 'Email sudah terdaftar'
                                })
                            }
                        } else {
                            const newUser = {
                                name: family_name + given_name,
                                email,
                                password: process.env.GOOGLE_PASSWORD
                            }

                            User.create(newUser)
                                .then(result => {
                                    const payload = {
                                        id: result.id,
                                        email: result.email,
                                        name: result.name
                                    }
                                    const message = 'Successfully logged in.'
                                    const token = createToken(payload)
                                    res.status(200).json({ token, message })
                                })
                                .catch(next)
                        }
                    })
                    .catch(next)
            })
            .catch(next)
    }
}

module.exports = UserController
