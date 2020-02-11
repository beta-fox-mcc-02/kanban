const {User, UserTask, Task, Invitation, UserOrganization, Organization, Category} = require('../models')

class Controller{
    static readAll(req, res, next){
        Organization.findAll({
                include : [
                    {
                        model : User
                    },
                    {
                        model : Task,
                        include : [
                            {
                                model : Category
                            },
                            {
                                model : User
                            }
                        ]
                    }
                ]
            })
            .then(result => {
                res.status(200).json({
                    result
                })
            })
            .catch(next)
    }
    static insert(req, res, next){
        const UserId = req.decode.id
        const newTask = {
            title : req.body.title,
            categoryId : req.body.categoryId
        }
        Task.create(newTask)
            .then(result => {
                return UserTask.create({
                    UserId,
                    TaskId : result.id
                })
            })
            .then(result => {
                res.status(201).json(result)
            })
            .catch(next)
    }
    static friend(req, res, next){
        const id = req.params.id
        const UserId = req.body.UserId
        UserTask.create({
                UserId,
                TaskId : id
            })
            .then(result => {
                res.status(201).json(result)
            })
            .catch(next)
    }
    static update(req, res, next){
        const id = req.params.id
        const task = {
            title : req.body.title,
            categoryId : req.body.categoryId
        }
        Task.update(task, {
                where : {
                    id
                }
            })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(next)
    }
    static delete(req, res, next){
        const TaskId = req.params.id
        UserTask.destroy({
                where : {
                    id : TaskId
                }
            })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(next)
    }
    static category(req, res, next){
        const newCategory = {
            name : req.body.category
        }
        Category.create(newCategory)
            .then(result => {
                res.status(201).json(result)
            })
            .catch(next)
    }
}

module.exports = Controller