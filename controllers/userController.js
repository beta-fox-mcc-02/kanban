const { User } = require('../models')
const BcryptPassword = require('../helpers/bcryptPassword.js')
const { Op } = require('sequelize')
const jwt = require('jsonwebtoken')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client("146329937386-os4lmh278qt7on593p96os957soc0bdf.apps.googleusercontent.com")

class UserController{
    static register(req, res, next) {
        User.findOne({
            where: {
                email: {
                    [Op.iLike]: req.body.email
                }
            }
        })
        .then((data) => {
            if(!data) {
                return User.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password
                })
            }
            else return false
        })
        .then((data) => {
            if(data) res.status(201).json({ msg: `Successfully added ${req.body.email}` })
            else next(`INPUT EXIST`)
        })
        .catch((err) => next(err))
    }
    
    static login(req, res, next) {
        User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(data => {
            if(data) {
                let isPassValid = BcryptPassword.comparing(req.body.password, data.password)
                if(isPassValid) {
                    let payload = {
                        id: data.id,
                        email: data.email
                    }
                    let token = jwt.sign(payload, 'private key')
                    res.status(200).json({ token, name: data.name })
                }
                else next(`INPUT INVALID`)
            }
            else next(`INPUT NOT FOUND`)
        })
        .catch((err) => next(err))
    }

    static googleLogin(req, res, next) {
        let email;
        client.verifyIdToken({
            idToken: req.body.id_token,
            audience: "146329937386-os4lmh278qt7on593p96os957soc0bdf.apps.googleusercontent.com"
        })
        .then((response) => { 
            email = response.payload.email
            return User.findOne({
                where: { email }
            })
        })
        .then((result) => {
            if(!result) {
                return User.create({
                    email,
                    password: `ucul`
                })
            }
            else return result
        })
        .then((data) => {
            let payload = {
                id: data.id,
                email: data.email
            }
            let token = jwt.sign(payload, 'private key')
            res.status(200).json({ token, name: data.name })
        })
        .catch((err) => next(err))
    }
}

module.exports = UserController