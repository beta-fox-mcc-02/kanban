const { User } = require('../models')
const { generateToken } = require('../helpers/jwt')
const { comparePassword } = require('../helpers/bcrypt')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

class UserController {
    static register(req, res, next) {
        const { username, email, password } = req.body
        User.create({ username, email, password })
            .then(user => {
                const payload = {
                    id: user.id,
                    email: user.email
                }
                const token = generateToken(payload)
                res.status(200).json({token})
            })
            .catch(next)
    }

    static login(req, res, next) {
        const { email, password } = req.body
        User.findOne({ where : { email } })
            .then(user => {
                if(!user) {
                    next({ name: 'WrongEmail' })
                }
                else {
                    const matched = comparePassword(password, user.password)
                    if(matched) {
                        const payload = {
                            id: user.id,
                            email: user.email
                        }
                        const token = generateToken(payload)
                        res.status(200).json({token})
                    }
                    else {
                        next({ name: 'WrongPassword' })
                    }
                }
            })
            .catch(next)
    }

    static googleSignIn(req, res, next) {
        let payload
        console.log(req.body,'GSIGNINNNN')
        client.verifyIdToken({
            idToken: req.body.id_token,
            audience: process.env.CLIENT_ID
        })
            .then(ticket => {
                payload = ticket.getPayload()
                console.log(payload, 'PAYLOAD')
                return User.findOne({ 
                    where: { email: payload.email }
                 })
            })
            .then(userData => {
                console.log('uDATA')
                if(!userData) {
                    return User.create({
                        username: payload.name,
                        email: payload.email,
                        password: process.env.G_PASSWORD
                    })
                }
                else {
                    return userData
                }
            })
            .then(user => {
                console.log('mau G TOKEN')
                const token = generateToken({
                    id: user.id,
                    email: user.email
                })
                res.status(200).json({payload, token})
            })
            .catch(next)
    }
}

module.exports = UserController