const {Task} = require('../models')

module.exports = (req,res,next)=>{
    const id = +req.params.id
    // console.log(req.params.id)
    Task.findByPk(id)
        .then(data => {
            if(data.UserId == req.currentId){
                next()
            }
            else{
                next({
                    msg : 'Please Check Again ur Status'
                })
            }
        })
        .catch(err => {
            next(err)
        })
}