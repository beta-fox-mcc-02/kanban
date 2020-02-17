const {Task} = require('../models')

module.exports = (req,res,next)=>{
    const id = +req.params.id
    console.log(req.params.id,'ini')
    Task.findByPk(id)
    // console.log(req.currentId)
        .then(data => {
            console.log(data.UserId,'ini current Id')
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