errorHandler = (err, req, res, next) => {
    const error = err
    console.log(error)
    if(error.name === 'sequelizeDatabaseError') {
        res.status(500).json({
            msg : 'something wrong with server or database'
        })
    }
    else if(error.name === 'SequelizeValidationError') {
        const messages = []
        for(let i = 0; i < error.length; i++){
            messages.push(error[i].message)
        }
        // error.errors.forEach(err => {
        //     messages.push(err.message)
        // });
        res.status(400).json(error)
    }
    else if(error.name === 'badInput'){
        res.status(400).json(error)
    }
    else if(error.name === 'JsonWebTokenError'){
        res.status(400).json(error)
    }
    else{
        res.status(404).json({
            msg : 'Data not Found'
        })
    }
}

module.exports = errorHandler