const {Organization, User, Task, Category, OrganizationMember, TaskUser} = require('../models')

class TaskController {
    static newTask(req, res, next) {
        Task.create({
            title: req.body.title,
            description: req.body.description,
            OrganizationId: req.params.orgId
        })
            .then(task => {
                console.log('ayy')
                return TaskUser.create({
                    TaskId: task.id,
                    UserId: req.decoded.id
                })
            })
            .then(result => {
                res.status(201).json({
                    success: `New Task has been created by ${req.decoded.name}`
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static getOneTask(req, res, next) {
        Task.findOne({
            where: {
                id: req.params.taskId,
                OrganizationId: req.params.orgId
            },
            include: [Category, Organization, User]
        })
            .then(task => {
                res.status(200).json(task)
            })
            .catch(err => {
                next(err)
            })
    }

    static assignMemberToTask(req, res, next) {
        Task.findOne({
            where: {
                id: req.params.taskId
            },
            include: [{
                model: User,
                attributes: {
                    exclude: ['password']
                }
            }]
        })
            .then(task => {
                let findUser = task.Users.filter(el => el.id == req.params.userId)
                if(findUser.length) {
                    next({
                        name: 'BadRequest',
                        message: 'member has already assigned to the task'
                    })
                } else {
                    return TaskUser.create({
                        TaskId: req.params.taskId,
                        UserId: req.params.userId
                    })
                }
            })
            .then(data => {
                res.status(200).json({
                    success: 'Member has assigned to the task'
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static removeMemberFromTask(req, res, next) {
        Task.findOne({
            where: {
                id: req.params.taskId
            },
            include: [{
                model: User,
                attributes: {
                    exclude: ['password']
                }
            }]
        })
            .then(task => {
                let findUser = task.Users.filter(el => el.id == req.params.userId)
                if(!findUser.length) {
                    next({
                        name: 'NotFound',
                        message: 'cannot remove the unassigned member'
                    })
                } else {
                    return TaskUser.destroy({
                        where: {
                            TaskId: req.params.taskId,
                            UserId: req.params.userId
                        }
                    })
                }
            })
            .then(data => {
                res.status(200).json({
                    success: 'Member has removed from the task'
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static updateTask(req, res, next) {
        Task.update({
            title: req.body.title,
            description: req.body.description,
            CategoryId: req.body.category_id
        }, {
            where: {
                id: req.params.taskId,
                OrganizationId: req.params.orgId
            }
        })
            .then(task => {
                res.status(200).json({
                    success: 'Task has updated successfully'
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static updateCategoryTask(req, res, next) {
        Task.update({
            CategoryId: req.body.category_id,
        }, {
            where: {
                id: req.params.taskId,
                OrganizationId: req.params.orgId
            }
        })
            .then(task => {
                res.status(200).json({
                    success: 'Category of the task has updated successfully'
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static deleteTask(req, res, next) {
        Task.destroy({
            where: {
                id: req.params.taskId
            }
        })
            .then(result => {
                return TaskUser.destroy({
                    where: {
                        TaskId: req.params.taskId
                    }
                })
            })
            .then(result => {
                res.status(200).json({
                    success: 'Task has deleted successfully'
                })
            })
            .catch(err => {
                next(err)
            })
    }
}

module.exports = TaskController