const {User, UserTask, Task, Invitation, UserOrganization, Organization, Category} = require('../models')
const {createToken} = require('../helpers/jwt')
const {compare} = require('../helpers/bcryptjs')

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
        const id = req.params.id
        const name = req.params.name
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
}

module.exports = Controller