const { Task } = require('../models');


class TaskController {
    static findAll(req, res, next) {
        Task.findAll({
            include: [ 'Category', 'User' ]
            // order: [['CategoryId', 'ASC']]
        })
            .then(data => {
                res.status(200).json({
                    data,
                    msg: 'Read all data Task success'
                })
            })
            .catch(err => {
                next(err);
            });
    }

    static findId(req, res, next) {
        const { id } = req.params;

        Task.findByPk(id,{ include: [ 'Category', 'User' ] })
            .then(data => {
                if(data) {
                    res.status(200).json({
                        data,
                        msg: 'Find data by PK Task success'
                    })
                } else {
                    next({
                        name: 404,
                        msg: 'No result data Task',
                        process: 'Find data by PK Task'
                    })
                }
            })
    }

    static create(req, res, next) {
        const data = {
            title: req.body.title,
            CategoryId: Number(req.body.CategoryId),
            UserId: Number(req.body.UserId)
        }
        
        Task.create(data)
            .then(result => {
                res.status(201).json({
                    data: result,
                    msg: 'Input Task success'
                })
            })
            .catch(err => {
                next({
                    name: err.name,
                    msg: err,
                    process: 'Input Task'
                })
            })
    }

    static update(req, res, next) {
        const id = Number(req.params.id);
        
        const data = {
            title: req.body.title,
            CategoryId: Number(req.body.CategoryId),
            UserId: Number(req.body.UserId)
        }

        Task.update(data, { where: { id }, returning: true})
            .then(result => {
                if(result[0] > 0) {
                    res.status(200).json({
                        data: result[0][1],
                        msg: 'Update Task data success'
                    })
                } else {
                    next({
                        name: 404,
                        msg: 'No rows updated Task data',
                        process: 'Updating Task data'
                    })
                }
            })
            .catch(next);
    }
    
    static changeTitle(req, res, next) {
        const id = Number(req.params.id);
        console.log(id);
        console.log(req.body);
        
        const data = {
            title: req.body.title,
        }
console.log(data);

        Task.update(data, { where: { id }, returning: true})
            .then(result => {
                if(result[0] > 0) {
                    res.status(200).json({
                        data: result[0][1],
                        msg: 'Change title success'
                    })
                } else {
                    next({
                        name: 404,
                        msg: 'No rows updated Task data',
                        process: 'Change title'
                    })
                }
            })
            .catch(next);
    }

    static nextLevel(req, res, next) {
        const id = Number(req.params.id);
        console.log(req.body);
        
        const data = {
            CategoryId: Number(req.body.CategoryId) + 1
        }

        Task.update(data, { where: { id }, returning: true})
            .then(result => {
                if(result[0] > 0) {
                    res.status(200).json({
                        data: result[0][1],
                        msg: 'Next level success'
                    })
                } else {
                    next({
                        name: 404,
                        msg: 'No rows updated Task data',
                        process: 'Next level'
                    })
                }
            })
            .catch(next);
    }

    static delete(req, res, next) {
        const { id } = req.params;

        Task.destroy({ where: { id }})
            .then(data => {
                if(data) {
                    res.status(200).json({
                        data,
                        msg: 'Delete Task data success'
                    })
                } else {
                    next({
                        name: 404,
                        msg: 'No rows deleted Task data',
                    })
                }
            })
            .catch(next);
    }

    static findByCategories(req, res, next) {
        const { id } = req.params;

        Task.findAll({ 
            where: { CategoryId : id },
            include: [ 'Category', 'User' ]
        })
            .then(data => {
                if(data) {
                    res.status(200).json({
                        data,
                        msg: 'Find data by Categories success'
                    })
                } else {
                    next({
                        name: 404,
                        msg: 'No result data Task',
                        process: 'Find Task data by Categories'
                    })
                }
            })
    }
}

module.exports = TaskController;