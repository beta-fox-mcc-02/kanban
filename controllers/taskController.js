const { Task } = require('../models')

class TaskController {
  
  static createTask (req, res, next) {
    let data = {
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      UserId: req.currentUserId
    }
    Task
      .create(data)
      .then(task => {
        res.status(201).json(data)
      })
      .catch(err=> {
        res.status(500).json(err)
      })
  }


  static findAll (req, res, next) {
    Task
      .findAll({
        where: {
          UserId: req.currentUserId
        }
      })
      .then(task => {
        res.status(200).json(task)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }


  static deleteTask (req, res, next) {
    Task
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(data => {
        if(data > 0) {
          res.status(200).json({
            msg: 'Delete Success !'
          })
        } else {
          res.status(500).json({
            msg: "Delete Failed !"
          })
        }
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
  
  static changeCategory (req, res, next) {
    Task
      .update({
        category: req.body.category
      },{
        where: {
          id: req.params.id
        },
        returning: true
      })
      .then(task => {
        res.status(200).json(task)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

  static updateTask (req, res, next) {
    let data = {
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      UserId: req.currentUserId
    }
    Task
      .update(data, {
        where: {
          id: req.params.id
        },
        returning: true
      })
      .then(task => {
        res.status(200).json(task)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}

module.exports = TaskController
