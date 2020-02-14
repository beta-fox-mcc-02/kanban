const { User } = require('../models')
const { createToken } = require('../helper/jwt')
const { checkPassword } = require('../helper/bcrypt')
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

class Users {
    static register(req, res, next) {
        const { username, email, password } = req.body
        User.findOne({
            where: { email }
        })
            .then(data => {
                if (data) {
                    res.status(400).json({
                        msg: 'email has already taken'
                    })
                } else {
                    return User.create({ username, email, password })
                }
            })
            .then(data => {
                res.status(201).json({
                    data
                })
            })
            .catch(err => {
                console.log(err, 'error register findOne')
                res.status(500).json({
                    msg: 'Internal Server Error'
                })
            })
    }
    static login(req, res, next) {
        let { email, password } = req.body
        User.findOne({
            where: { email }
        })
            .then(data => {
                if(checkPassword(password,data.password)){
                    res.status(200).json({
                        token:createToken(data.id),
                        msg: 'data masuk'
                    })
                }else{
                    res.status(400).json({
                        msg:'email / password are wrong'
                    })
                }
            })
            .catch(err => {
                res.status(500).json({
                    err
                })
                console.log('error di login controller')
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
                        password: process.env.PASSWORD
                    })
                } else {
                    return data
                }
            })
            .then(data => {
                const token = createToken(data.dataValues.id)
                res.status(200).json({
                    id: data.dataValues.id,
                    token
                })
            })
            .catch(err => console.log(err, 'error google sign in'))
    }
}

module.exports = Users