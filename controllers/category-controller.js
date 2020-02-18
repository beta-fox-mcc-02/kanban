const {User, Task, Category} = require('../models');

class Controller {

    static create(req, res, next) {
        Category.create({
            name: req.body.name,
            UserId: req.decoded
        })
            .then(newCategory => {
                res.status(201).json(newCategory);
            })
            .catch(err => {
                next(err);
            })
    }

    static findAll(req, res, next) {
        Category.findAll({
            where: {UserId: req.decoded}
        })
            .then(categories => {
                res.status(200).json(categories);
            })
            .catch(err => {
                console.log(req.decoded, '===============')
                next(err);
            })
    }

    static findOne(req, res, next) {
        Category.findOne({
            where: {id: req.params.id}
        })
            .then(category => {
                res.status(200).json(category);
            })
            .catch(err => {
                next(err);
            })
    }

    static update(req, res, next) {
        Category.update({
            name: req.body.name
        }, {
            where: {id: req.params.id}
        })
            .then(category => {
                res.status(201).json(category)
            })
            .catch(err => {
                next(err);
            })
    }
}

module.exports = Controller;