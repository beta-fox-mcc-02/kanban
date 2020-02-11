module.exports = function (err, req, res, next) {
  if (err.name === 'SequelizeValidationError') {
    err.status = 400;
    err.message = err.errors.map(el => el.message);
  }

  if (err.name === 'JsonWebTokenError') {
    err.status = 401;
    err.message = 'You must register first';
  }

  if (err.name === 'SequelizeUniqueConstraintError') {
    err.status = 400;
    err.message = 'Email already exists';
  }

  if (err.name === 'Unauthorized') {
    err.status = 401;
    err.message = 'You are not authorized';
  }

  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
}