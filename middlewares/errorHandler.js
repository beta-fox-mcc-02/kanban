const errorHandler = (err, req, res, next) => {
  console.log(err)
  let status = 500
  let errors = []
  const errorObj = {
    status,
    errors,
    message: ''
  }

  if (err.name === 'SequelizeValidationError') {
    status = 400
    errorObj.message = 'Bad Request'
    for (const er of err.errors) {
      errorObj.errors.push(er.message)
    }
    res.status(status).json(errorObj)
  } else if (err.name === 'SequelizeUniqueConstraintError') {
    status = 400
    errorObj.message = 'Bad Request'
    for (const e of err.errors) {
      errorObj.errors.push(e.message)
    }
    res.status(status).json(errorObj)
  } else {
    status = err.status || 500
    errorObj.message = err.name || 'Invalid Server Error'
    errorObj.errors.push(err.message)
    res.status(status).json(errorObj)
  }
}

module.exports = errorHandler