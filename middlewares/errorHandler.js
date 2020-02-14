const errorHandler = (err, req, res, next) => {
  let status = 500
  let errors = []
  const errorObj = {
    status,
    errors,
    message: ''
  }

  if (err.name === 'SequelizeValidationError') {
    errorObj.message = 'Bad Request'
    errorObj.status = 400
    for (const er of err.errors) {
      errorObj.errors.push(er.message)
    }
    res.status(status).json(errorObj)
  } else if (err.name === 'SequelizeUniqueConstraintError') {
    errorObj.message = 'Bad Request'
    errorObj.status = 400
    for (const e of err.errors) {
      errorObj.errors.push(e.message)
    }
    res.status(status).json(errorObj)
  } else if (err.name === 'JsonWebTokenError') {
    errorObj.message = err.name
    errorObj.errors.push(err.message)
    errorObj.status = 400
    res.status(status).json(errorObj)
  } else {
    status = err.status || 500
    errorObj.message = err.name || 'Invalid Server Error'
    errorObj.errors.push(err.message)
    res.status(status).json(errorObj)
  }
}

module.exports = errorHandler