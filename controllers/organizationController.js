const {Organization, User, Task, Category, OrganizationMember} = require('../models')

class OrganizationController {
    static newOrganization(req, res, next) {
        Organization.create({
            name: req.body.name
        })
            .then(org => {
                return OrganizationMember.create({
                    OrganizationId: org.id,
                    UserId: req.decoded.id
                })
            })
            .then(result => {
                res.status(201).json({
                    success: `New Organization has been created by ${req.decoded.name}`
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static getOrganizations(req, res, next) {
        User.findOne({
            where: {
                id: req.decoded.id
            },
            include: [{
                model: Organization,
                include: [{
                    model: Task,
                    include: [{
                        model: User,
                        attributes: {
                            exclude: ['password']
                        }
                    }, {
                        model: Category
                    }]
                }]
            }]
        })
            .then(user => {
                res.status(200).json(user.Organizations)
            })
            .catch(err => {
                next(err)
            })
    }

    static getOneOrganization(req, res, next) {
        Organization.findOne({
            where: {
                id: req.params.orgId
            },
            include: [{
                model: User,
                attributes: {
                    exclude: ['password']
                }
            }, {
                model: Task,
                include: [Category]
            }]
        })
            .then(org => {
                res.status(200).json(org)
            })
            .catch(err => {
                next(err)
            })
    }

    static addMember(req, res, next) {
        Organization.findOne({
            where: {
                id: req.params.orgId
            },
            include: [{
                model: User,
                attributes: {
                    exclude: ['password']
                }
            }, {
                model: Task,
                include: [Category]
            }]
        })
            .then(org => {
                let filterUser = org.Users.filter(el => el.name == req.params.username)
                if(filterUser.length) {
                    next({
                        name: 'BadRequest',
                        message: 'Member already existed in the organization'
                    })
                } else {
                    return User.findOne({
                        where: {
                            name: req.params.username
                        }
                    })
                }
            })
            .then(user => {
                return OrganizationMember.create({
                    OrganizationId: req.params.orgId,
                    UserId: user.id
                })
            })
            .then(result => {
                res.status(201).json({
                    success: 'Adding member success'
                })
            })
            .catch(err => {
                next(err)
            })
    } 

    static updateOrganization(req, res, next) {
        Organization.update({
            name: req.body.name
        }, {
            where: {
                id: req.params.orgId
            }
        })
            .then(result => {
                res.status(200).json({
                    success: `Organization has been updated`
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static deleteOrganization(req, res, next) {
        Organization.destroy({
            where: {
                id: req.params.orgId
            }
        })
            .then(result => {
                return OrganizationMember.destroy({
                    where: {
                        OrganizationId: req.params.orgId
                    }
                })
            })
            .then(result => {
                res.status(200).json({
                    success: `Organization has been delete`
                })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = OrganizationController