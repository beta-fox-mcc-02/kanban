const { Project, ProjectMember, User, Task } = require('../models')

class ProjectController {
  static createProject (req, res, next) {
    let result
    Project
      .create({
        name: req.body.name
      })
      .then(project => {
        result = project
        return ProjectMember.create({
          UserId: req.currentUserId,
          ProjectId: project.id
        })
      })
      .then(_ => {
        res.status(201).json(result)
      })
      .catch(next)
  }

  static findAllProjects (req, res, next) {
    Project
      .findAll({
        include: [
          {
            model: User,
            where: {
              id: req.currentUserId
            }
          },{
            model: Task
          }
        ]
      })
      .then(projects => {
        res.status(200).json(projects)
      })
      .catch(next)
  }

  static findProject (req, res, next) {
    Project
      .findByPk(req.params.id, {
        include: [
          {
            model: User
          },{
            model:Task
          }
        ]
      })
      .then(project => {
        res.status(200).json(project)
      })
      .catch(next)
  }

  static inviteUser (req, res, next) {
    let data = {
      UserId: req.body.UserId,
      ProjectId: req.body.ProjectId
    }
    ProjectMember
      .create(data)
      .then(project => {
        res.status(201).json(project)
      })
      .catch(next)
  }
}

module.exports = ProjectController
