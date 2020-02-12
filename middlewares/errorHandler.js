module.exports = (err, req, res, next) => {
  console.log('Error Handler', err)
  let statusCode = 500
  let msg = 'Internal server error'
  res.status(statusCode).json({
    err,
    msg
  }) 
}