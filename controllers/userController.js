const {User, UserTask, Task, Invitation, UserOrganization, Organization, Category} = require('../models')
const {createToken} = require('../helpers/jwt')
const {compare} = require('../helpers/bcryptjs')
const {OAuth2Client} = require('google-auth-library')
const client = new OAuth2Client(process.env.CLIENT_ID)
const jwt = require('../helpers/jwt')

class Controller{
    static register(req, res, next){
        const newUser = {
            username : req.body.username,
            email : req.body.email,
            password : req.body.password
        }
        User.create(newUser)
            .then(result => {
    
                const user = {
                    id : result.id,
                    username : result.username,
                    email : result.email
                }
                const token = createToken(user)
                res.status(201).json({
                    data : {
                        token
                    }
                })
            })
            .catch(next)
    }
    static login(req, res, next){
        const userLogin = {
            username : req.body.username,
            email : req.body.email,
            password : req.body.password
        }
        User.findOne({
                where : {
                    username : userLogin.username
                }
            })
            .then(user => {
                if(user){
                    let check = compare(userLogin.password, user.password)
                    if(check){
                        user = {
                            id : user.id,
                            username : user.username,
                            email : user.email
                        }
                        const token = createToken(user)
                        res.status(200).json({
                            data : {
                                token
                            }
                        })
                    }
                    else{
                        const err = {
                            name : 'SequelizeValidationError',
                            message : 'Username/email/password wrong'
                        }
                        next(err)
                    }
                }
                else{
                    return User.findOne({
                            where : {
                                email : userLogin.email
                            }
                        })
                }
            })
            .then(user => {
                if(user){
                    let check = compare(userLogin.password, user.password)
                    if(check){
                        user = {
                            id : user.id,
                            username : user.username,
                            email : user.email
                        }
                        const token = createToken(user)
                        res.status(200).json({
                            data : {
                                token
                            }
                        })
                    }
                    else{
                        const err = {
                            name : 'SequelizeValidationError',
                            message : 'Username/email/password wrong'
                        }
                        next(err)
                    }
                }
                else{
                    const err = {
                        name : 'SequelizeValidationError',
                        message : 'Username/email/password wrong'
                    }
                    next(err)
                }
            })
            .catch(err => {
    
            })
    }
    static accept(req, res, next){
        const id = req.body.id
        const name = req.body.name
        Organization.findOne({
                where : {
                    name
                }
            })
            .then(org => {
                return UserOrganization.create({
                    UserId : req.decode.id,
                    OrganizationId : org.id
                })
            })
            .then(result => {
                return Invitation.destroy({
                    where : {
                        id
                    }
                })
            })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(next)
    }
    static invite(req, res, next){
        console.log('masuuuuuuuk')
        Organization.findByPk(+req.headers.id)
            .then(result => {
                console.log(result.name)
                const newInvitation = {
                    organization : result.name,
                    UserId : req.body.UserId
                }
                return Invitation.create(newInvitation)
            })
            .then(result => {
                res.status(201).json(result)
            })
            .catch(next)
    }
    static userInvitation(req, res, next){
        const id = req.decode.id
        Invitation.findAll({
                where : {
                    UserId : id
                }
            })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(next)
    }
    static refuse(req, res, next){
        const id = req.body.id
        Invitation.destroy({
            where : {
                id
            }
        })
        .then(result => {
            res.status(200).json(result)
        })
        .catch(next)
    }
    static gLogin(req, res, next){
        let email
        client.verifyIdToken({
                idToken : req.body.gToken,
                audience : process.env.CLIENT_ID
            })
            .then(data => {
                const payload = data.getPayload() 
                // console.log('masuuuuuuuuuuuuuuuuuk', payload.email)
                email = payload.email
                // console.log(email, 123456)
                return User.findOne({
                        where : {
                            email
                        }
                    })
            })
            .then(user => {
                // console.log(user.dataValues)
                if(!user){
                    // console.log('New user has login')
                    const newUser = {
                        email,
                        password : process.env.TEMP_PASS
                    }
                    return User.create(newUser)
                }
                else return user.dataValues
            })
            .then(result => {
                // console.log(result)
                const token = jwt.createToken(result)
                res.status(200).json({
                    data : result,
                    msg : 'login success',
                    token
                })
            })
            .catch(next)
    }
}

module.exports = Controller