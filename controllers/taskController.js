const {Organization, User, Task, Category, OrganizationMember, TaskUser} = require('../models')

class TaskController {
    static newTask(req, res, next) {
        Task.create({
            title: req.body.title,
            description: req.body.description,
            CategoryId: 1,
            OrganizationId: req.params.orgId
        })
            .then(task => {
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

}

module.exports = TaskController