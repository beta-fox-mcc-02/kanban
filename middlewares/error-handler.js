const errorHandler = (err, req, res, next) => {
    let status = err.status || 500;
    let obj = {};
    obj.name = err.name || 'Internal server error';
    obj.errors = [];
    obj.message = err.message || ''
        console.log(err);
        // Error in validation from sequelize
        if(err.name === 'SequelizeValidationError')  {
            status = 400
            obj.message = 'Bad request'
            err.errors.forEach(el => {
                obj.errors.push(el.message);
            });
        }
    
        // Not found
        if(err.name === 'Not found') {
            status = 404;
            obj.message = err.name;
            obj.errors.push(err.message);
        }  
    
        if(err.name === 'SequelizeUniqueConstraintError')  {
            status = 400
            obj.message = 'Bad request'
            err.errors.forEach(el => {
                obj.errors.push(el.message);
            });
        }

    res.status(status).json(obj);

}

module.exports = errorHandler;