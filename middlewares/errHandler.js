module.exports = (err, req, res, next) => {
    switch(err.name) {
        case 'SequelizeConnectionError':
            res.status(500).json({
                msg: 'Server Error',
                process: err.process
            });
            break;
        case 'SequelizeValidationError':
            res.status(400).json({
                msg: 'Validation Error',
                process: err.process
            });
            break;
        default:
            res.status(err.name).json({
                msg: err.msg,
                process: err.process
            });
    }
}