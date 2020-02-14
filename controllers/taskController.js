const { Task } = require("../models");

class taskController {
  static getAll(req, res, next) {
    Task.findAll()
      .then(data => {
        // console.log("disini");
        res.status(200).json(data);
      })
      .catch(next);
  }

  static add(req, res, next) {
    Task.create({
      title: req.body.title,
      assignee: req.body.assignee,
      desc: req.body.desc,
      status: req.body.status,
      ProjectId: req.body.ProjectId
    })
      .then(data => {
        req.io.emit("news", data);
        res.status(200).json(data);
      })
      .catch(next);
  }

  static remove (req, res, next){
    Task.destroy({
      where:{
        id: req.params.id
      }
    })
    .then(data => {
      req.io.emit("fetchTask");

      res.status(200).json(data);
    })
    .catch(next);

  }

  static updateStatus(req, res, next){
    // console.log(req.body.status, 'dari controller task');
    
    Task.update({
      status: req.body.status,
    }, {
      where: {
        id: req.params.id
      },
      returning: true
    })
    .then(data => {
      req.io.emit("fetchTask");
      res.status(200).json(data);
    })
    .catch(next);
  }
}

module.exports = taskController;
