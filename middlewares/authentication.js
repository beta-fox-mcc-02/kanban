const { User } = require('../models')
const { verifyToken } = require('../helper/jwt')

module.exports = (req, res, next) => {
    console.log(verifyToken(req.headers.token));
    const { id } = verifyToken(req.headers.token)
    
    User.findOne({ where: { id } })
        .then(data=>{
            if(data.dataValues){
                req.decoded = data.dataValues
                next()
            }else{
                res.status(500).json({
                    msg:'id not found'
                })
            }
        })
        .catch(err=>{
            res.status(500).json({
                err,
                msg:'error authentication'
            })
        })
}