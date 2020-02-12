const { Task } = require('../models')

class TaskController {

    static create(req, res, next){
        let {title, description} = req.body
        let inputTask = {title, description}

        Task
            .create(inputTask)
            .then(newTask => {
                res.status(201).json({
                    data: newTask,
                    msg: "success add new task"
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    static findAll(req, res, next) {
        let id = 1
        let category = 2
        Task
            .findAll( { 
                where : {
                    UserId : id,
                    CategoryId : category
                }
            })
            .then(tasks => {
                res.status(200).json({
                    data: tasks,
                    msg: "success read all"
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    static findOne(req, res, next){
        let taskId = +req.params.id
        Task
            .findByPk(taskId)
            .then(taskById => {
                console.log(taskById)
            })
            .catch(err => {
                console.log(err)
            })
    }

    static update(req, res, next){
        let taskId = +req.params.id
        let { title, description} = req.body
        let updateData = {title, description}
        Task
            .update(updateData, { 
                where : {
                    id : taskId
                }
            })
            .then(updatedTask => {
                res.status(201).json({
                    data: updatedTask,
                    msg: "success!"
                })
                console.log(updatedTask)
            })
            .catch(err => {
                console.log(err)
            })
    }

    static remove(req, res, next){
        let taskId = +req.params.id
        console.log(taskId)
        Task
            .destroy({
                where : {
                    id : taskId
                }
            })
            .then(deletedTask => {
                res.status(200).json({
                    data: deletedTask,
                    msg: "deleted success!"
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

module.exports = TaskController