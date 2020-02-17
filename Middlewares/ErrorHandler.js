module.exports = (err,req,res,next)=>{
    let obj = {
        msg : [],
        status : null
    }
    if(err.name == "SequelizeValidationError"){
        err.errors.forEach(el => {
            obj.msg.push(el.message)
            obj.status = 400
            
        })
        console.log(obj.status)
        res.status(obj.status).json(obj.msg)
    }
    if(err.name === "failLogin"){
        res.status(err.status).json(err.msg)
    }
}