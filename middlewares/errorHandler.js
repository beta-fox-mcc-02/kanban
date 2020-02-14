module.exports = (err, req, res, next) => {
  let status = 500;
  let messege = err.messege;

  // console.log(err, 'ini errornya');
  // console.log(err.status, 'ini kode');
  // console.log(err.messege, 'ini pesan');

  if (err.name == `SequelizeValidationError`) {
    status = 400;
    let errors = [];
    for (let i = 0; i <= err.errors.length - 1; i++) {
      errors.push(err.errors[i].messege);
    }
    res.status(status).json({ errors: errors });
  } else if (err.status === 404) {
    status = 404;
    messege = err.messege;
    res.status(status).json({ msg: messege });
  } else if (err.status === 400) {
    status = 400;
    res
      .status(status)
      .json({
        msg: `cannot make request because field doesn't met requirements`
      });
  } else if (err.status === 401) {
    status = 401;
    messege = `you're not allowed to make this request`;
    res.status(status).json({ msg: messege });
  } else if (err.name == "JsonWebTokenError") {
    status = 401;
    res.status(status).json({ msg: messege });
  } else {
    res.status(status).json({ msg: messege });
  }
  //  res.status(status).json({ msg: messege })
};
