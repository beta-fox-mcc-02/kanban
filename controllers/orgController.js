const {User, UserTask, Task, Invitation, UserOrganization, Organization, Category} = require('../models')

class Controller{
    static choose(req, res, next){
        req.organization = req.body.organization
        res.status(200).json(organization)
    }
    static readAll(req, res, next){
        Organization.findAll({
               include : {
                    model : User,
                    attributes : {
                        exclude : 'password'
                    }
               }
            })
            .then(org => {
                const organization = []
                org.forEach(el => {
                    el.Users.forEach(els => {
                        if(els.id === req.decode.id){
                            organization.push(el)
                        }
                    })
                });
                res.status(200).json(organization)
            })
            .catch(next)
    }
    static createOrg(req, res, next){
        const newOrg = {
            name : req.body.name,
            created : req.decode.username
        }
        Organization.create(newOrg)
            .then(org => {
                return UserOrganization.create({
                    UserId : req.decode.id,
                    OrganizationId : org.id
                })
            })
            .then(userOrg => {
                res.status(201).json(userOrg)
            })
    }
    static check(req, res, next){
        Invitation.findAll()
            .then(result => {
                res.status(200).json(result)
            })
            .catch(next)
    }
}

module.exports = Controller