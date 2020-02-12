const { Task } = require('../models')
const { User } = require('../models')
const { Category } = require('../models')

class TaskController {
    static addTask(req, res, next) {
        let payload = {
            title : req.body.title,
            description : req.body.description,
            CategoryId: 1,
            UserId : req.currentUserId
        }
        Task.create(payload)
            .then(task => {
                res.status(201).json({
                    msg: "Add Task is successfully",
                    data : task
                })
            })
            .catch(next)
    }

    static getAllTask(req, res, next) {
        console.log('MASUK FINDALL CONTROLLER TASK')
        let dataTasks = ''
        Task.findAll({
            where : {
                UserId : req.currentUserId
            },
            include : [{
                model: User,
                attributes: {
                    exclude: ['password']
                }
            }, {
                model: Category
            }]
        })
            .then(tasks => {
                console.log('MASUK OUTPUT TASK FIND ALL')
                dataTasks = tasks
                return User.findByPk(req.currentUserId)
            })
            .then(user => {
                console.log('MASUK OUTPUT USER FIND BY PK')
                res.status(200).json({
                    msg : "get all data success",
                    data : dataTasks,
                    user : user
                })
            })
            .catch(next)
    }

    static findById(req, res, next) {
        let id = req.params.id
        let dataTask = 
        Task.findOne({
            where : {
                id : id
            },
            include : [{
                model: Category
            }]
        })
            .then(task => {
                dataTask = task
                return Category.findAll()
            })
            .then(categories => {
                res.status(200).json({
                    msg : "Get data success",
                    dataTask : dataTask,
                    dataCategories : categories
                })
            })
    }

    static edit(req, res, next) {
        let id = req.params.id
        let payload = {
            title : req.body.title,
            description : req.body.description,
            CategoryId : req.body.CategoryId,
        }
        Task.update(payload, {
            where : {
                id: id
            },
            returning : true
        })
            .then(data => {
                res.status(200).json({
                    msg : 'Updated data successfully',
                    data : data
                })
            })
            .catch(next)
    }

    static delete(req, res, next) {
        let id = req.params.id
        Task.destroy({where : {
            id : id
        }})
            .then(data => {
                res.status(200).json({
                    msg: "Deleted task successfully"
                })
            })
            .catch(next)
    }

}

module.exports = TaskController