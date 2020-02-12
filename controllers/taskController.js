const {
    Task
} = require("../models")

class TaskController {
    static findAll(req, res, next) {
        Task.findAll({
                where: {
                    UserId: req.UserId
                }
            })
            .then(data => {
                res.status(200).json({
                    data
                })
            })
            .catch(err => {
                console.log(err)
                next(err)
            })
    }

    static create(req, res, next) {
        const title = req.body.title
        const category = req.body.category
        Task.create({
                title: title,
                UserId: req.UserId,
                CategoryId: category
            })
            .then(data => {
                res.status(201).json({
                    data,
                    msg: "Data created successfully"
                })
            })
            .catch(err => {
                console.log(err)
                next(err)
            })
    }

    static delete(req, res, next) {
        const id = req.params.id
        Task.destroy({
                where: {
                    id: id
                }
            })
            .then(data => {
                if (data) {
                    res.status(200).json({
                        data,
                        msg: "Data deleted successfully"
                    })
                } else {
                    let err = {
                        err: "NOT FOUND",
                        msg: "DATA NOT FOUND"
                    };
                    next(err);
                }
            })
            .catch(err => {
                console.log(err)
                next(err)
            })
    }

    static findOne(req, res, next) {
        const id = req.params.id
        Task.findOne({
                where: {
                    id: id
                }
            })
            .then(data => {
                res.status(200).json({
                    data,
                    msg: "Data found"
                })
            })
            .catch(err => {
                next(err)
            })
    }

    static update(req, res, next) {
        const id = req.params.id
        const title = req.body.title
        const category = req.body.category
        Task.update({
                title: title,
                CategoryId: category,
                UserId: req.UserId
            }, {
                where: {
                    id: id
                },
                returning: true
            })
            .then(data => {
                res.status(201).json({
                    data,
                    msg: "Data updated successfully"
                })
            })
            .catch(err => {
                console.log(err)
                next(err)
            })
    }
}

module.exports = TaskController