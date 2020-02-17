const { Task } = require('../models')
const bcrypt  = require('../helper/bcrypt')
const jwt =  require('../helper/jwt')

class ControllerTask {
    static findAll(req,res,next){
        Task.findAll({
        })
            .then(data => {
                let tamp= []
                for(let el of data){
                    if(el.UserId == req.currentId){
                        tamp.push(el)
                        console.log(el)
                    }
                }
                res.status(200).json(tamp)
            })
            .catch(err =>{
                console.log(err)
            })
    }
    static findOne(req,res,next){
        // console.log(req.params.id)
        Task.findOne({
            where : {
                id : req.params.id
            }
        })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                console.log(err)
            })
    }
    static edit(req,res,next){
        Task.findByPk(req.params.id)
            .then(data => {
                if(data){
                    return Task.update({
                        title : req.body.title,
                        UserId : req.currentId,
                        Description : req.body.Description,
                        CategoryId : +req.body.CategoryId
                    },{
                        where : {
                            id : req.params.id
                        }
                    })
                }
            })
            .then(data => {
                console.log(data)
                res.status(200).json(data)
            })
            .catch(err => {
                console.log(err)
            })

    }
    static delete (req,res,next){
        let id = +req.params.id
        console.log(id)
        Task.destroy({
            where : {
                id
            }
        })
        .then(data => {
            console.log()
                res.status(200).json(
                    'uwu'
                )
            })
            .catch(err =>{
                console.log(err)
            })
    }
    static add (req,res,next){
        let CateId = req.body.CategotyId
        if(!CateId){
            CateId = 1
        }
        console.log(CateId)
        let input = {
            title : req.body.title,
            UserId : req.currentId,
            CategoryId : CateId,
            Description : req.body.description,
        }
        Task.create(input)
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                console.log(err)
            })
    }
}

module.exports = ControllerTask