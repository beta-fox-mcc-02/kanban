const { User } = require('../models')
const { checkPassword } = require('../helpers/bcrypt')
const { generateToken } = require('../helpers/jwt')
const PRIVATKEY= process.env.PRIVATKEY
const CLIENTID = process.env.CLIENTID
const { OAuth2Client } = require('google-auth-library')
const client = new OAuth2Client(PRIVATKEY)

class UserController {
    static register(req, res, next){
        let {first_name, last_name, necessary, email, password} = req.body
        let newUser =  {first_name, last_name, necessary, email, password}

        User
            .create(newUser)
            .then(user => {
                res.status(201).json({
                    msg: "Data registered!"
                })
            })
            .catch(next)
    }

    static login(req, res, next){
        let {email, password} = req.body
        let loginUser = {email, password}

        User
            .findOne({
                where: {
                    email : loginUser.email
                }
            })
            .then(user => {
                if(checkPassword(loginUser.password, user.password) === true) {
                    let dataUser = {
                        id: user.id,
                        email: user.email
                    }
                    let token = generateToken(dataUser)
                    res.status(200).json({
                        access_token: token
                    })
                } else {
                    next({
                        name : "email / password might be wrong"
                    })
                }
            })
            .catch(next)
    }

    static googleLogin(req, res, next) {        
        let email = ""
        let newUser = {
            first_name: "",
            last_name: "", 
            necessary: "",
            email: "",
            password: ""
        }
        client 
            .verifyIdToken({
                idToken : req.headers.access_token,
                audience : CLIENTID
            })
            .then( googleUser => {
                newUser = {
                    first_name: googleUser.payload.name,
                    last_name: "", 
                    necessary: "",
                    email: googleUser.payload.email,
                    password: process.env.GOOGLE_PASSWORD
                }
                email = googleUser.payload.email

                return User.findOne({
                     where : {
                         email: email
                      }
                })
            })
            .then( data => { 
                if(!data) {
                    return User.create(newUser)
                } else return data
            })
            .then(data => {
                let payload = {
                    id: data.id,
                    email: email
                };
                let access_token = generateToken(payload, PRIVATKEY);
                res.status(200).json({
                    access_token
                });
            })
            .catch(err => {
                next(err);
            })
    }
}

module.exports = UserController