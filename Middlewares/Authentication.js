const { User } = require("../models")
const JwtHelper = require('../helper/jwt')

module.exports = (req,res,next) => {
    try{
        console.log(req.headers.token)
    const decode = JwtHelper.vertify(req.headers.token)
    console.log(decode,"ini cecode")
    req.currentId = decode.token.id
    User.findByPk(req.currentId)    
        .then(data => {
            if(data){
                User.findOne({
                    where : {
                        email : data.email
                    }
                })
                    .then(data => {
                        next()
                    })

            }else{
                next()
            } 
        })
    }
    catch(err){
        next(err)
    }
}