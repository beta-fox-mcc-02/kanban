const {User, UserTask, Task, Invitation, UserOrganization, Organization, Category} = require('../models')

class Controller{
    static readCategory(req, res, next){
        Category.findAll({
                where : {
                    OrganizationId : req.headers.id
                }
            })
            .then(result => {
                res.status(200).json({
                    result
                })
            })
            .catch(next)
    }
    static readAll(req, res, next){
        Category.findAll({
                where : {
                    OrganizationId : req.headers.id
                },
                include : {
                    model : Task,
                    include : {
                        model : User,
                        attributes : {
                            exclude : 'password'
                        }
                    }
                }
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
            description : req.body.description,
            CategoryId : req.body.CategoryId,
            OrganizationId : +req.headers.id
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
                    TaskId
                }
            })
            .then(result => {
                return Task.destroy({
                    where : {
                        id : TaskId
                    }
                })
            })
            .then(result => {
                res.status(200).json(result)
            })
            .catch(next)
    }
    static category(req, res, next){
        const newCategory = {
            name : req.body.category,
            OrganizationId : +req.headers.id
        }
        Category.create(newCategory)
            .then(result => {
                res.status(201).json(result)
            })
            .catch(next)
    }
    static allUser(req, res, next){
        User.findAll({
            attributes : {
                exclude : 'password'
            }
        })
         .then(result => {
             const users = []
             result.forEach(el => {
                 if(el.id != req.decode.id) users.push(el)
             });
             res.status(200).json(users)
         })
         .catch(next)
    }
}

module.exports = Controller