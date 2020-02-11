function errHandler(err, req, res, next) {
  console.log(err)
  let errors = []
  let status = 500
  if(err) {
    if(err.name === 'SequelizeValidationError') {
      err.errors.forEach(error => {
        errors.push(error.message)
      });
      status = 400
    }
  }
  res.status(status).json(errors)
}

module.exports = errHandler