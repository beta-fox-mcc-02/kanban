const {Project} = require('../models')
const {User} = require('../models')
const {projectUser} = require('../models')

class projectController{

  static removeUser(req, res, next){
    // console.log(req.params.id, 'dari controller');
    //aremove projectId
    projectUser.destroy({
      where:{
        UserId: req.params.userId,
        ProjectId: req.params.projectId
      }
    })
    .then(user =>{
      // req.io.emit("userList");
      res.status(200).json(user)
    })
    .catch(next)
  }

  static add(req, res, next){
    Project.create({
      name: req.body.name
    })
    .then(data =>{
      let newProject = data
      req.io.emit("project", newProject);
      return projectUser.create({
        ProjectId: data.id,
        UserId: req.currentUserId
      })

      console.log(data), 'ini data';
      
    })
    .then(dataCollab =>{
      
      res.status(200).json(dataCollab)
    })
    .catch(next)
  }

  static getAll(req, res, next){
    Project.findAll()
    .then(data =>{
      res.status(200).json(data)
    })
    .catch(err =>{
      res.status(500).json(err)
    })
  }

  static remove(req, res, next){
    Project.destroy({
      where:{
        id: req.params.id
      }
    })
    .then(data =>{
      req.io.emit("fetchProject", data);

      res.status(200).json(data)
    })
    .catch(next)
  }

  static update(req, res, next){

    Project.update({
      name: req.body.name,
    }, {
      where: {
        id: req.params.id
      },
      returning: true
    })
    .then(data =>{
      req.io.emit("fetchProject", data);
      res.status(200).json(data)
    })
    .catch(next)
  }

  static getListUser(req, res, next){
    Project.findAll({
      include: [User],
      where: {
        id: req.params.id
      }
    })
      .then(data => {
        // req.io.emit("addedUser", data);
        res.status(200).json(data)
      })
      .catch(next)
  }

  static collab(req, res, next){
    let projectId = req.body.projectId 
    User.findOne({
      where:{
        email: req.body.email
      }
    })
    .then(data =>{
      // console.log(data, 'ini dia');
      
      if (data){
        return projectUser.findOrCreate({
          where:{
            UserId: data.id,
            ProjectId: projectId
          }
        })
      }else{
        // console.log('masuk sini');
        throw ({messege: 'not found', status: 404})
      }
    })
    .then(datalagi =>{
      // console.log(datalagi[0],' dan', datalagi[0].UserId);
      res.status(200).json(datalagi[0])
    })
    .catch(next)
  }
}

module.exports = projectController