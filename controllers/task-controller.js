const {User, Task, Category} = require('../models');

class Controller {
    static create(req, res, next) {
        Task.create({
            title: req.body.title,
            description: req.body.description,
            UserId: req.decoded,
            CategoryId: req.body.CategoryId
        })
            .then(newTask => {
                res.status(201).json(newTask);
            })
            .catch(err => {
                next(err);
            })
    }

    static findAll(req, res, next) {
        Task.findAll({
            where: {id: req.decoded, CategoryId: req.params.CategoryId}
        })
            .then(tasks => {
                res.status(200).json(tasks);
            })
            .catch(err => {
                next(err);
            })
    }

    static findOne(req, res, next) {
        Task.findOne({
            where: {id: req.params.id}
        })
            .then(task => {
                if(task) {
                    res.status(200).json(task);
                } else {
                    const error = {
                        name: 'Not found',
                        message: 'Task not found'
                    }
                    next(error);
                }
            })
            .catch(err => {
                next(err);
            })
    }

    static delete(req, res, next) {
        Task.destroy({
            where: {id: req.params.id}
        })
            then(_=> {
                res.status(200).json(req.params.id);
            })
            .catch(err => {
                next(err);
            })
    }

    static update(req, res, next) {
        Task.update({
            title: req.body.title,
            description: req.body.description
        }, {
            where: {id: req.params.id},
            returning: true
        })
            then(task => {
                res.status(201).json(task);
            })
            .catch(err => {
                next(err);
            })
    }

    static updateCategory(req, res, next) {
        Task.update({
            CategoryId: req.body.CategoryId
        }, {
            where: {id: req.params.id},
            returning: true
        })
            .then(task => {
                res.status(201).json(task);
            })
            .catch(err => {
                next(err);
            })
    }
}

module.exports = Controller;