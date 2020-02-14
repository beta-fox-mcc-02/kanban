const jwt = require("jsonwebtoken");
const { User } = require("../models");

module.exports = function(req, res, next) {
  try {
    const { token } = req.headers;
    const decoded = jwt.verify(token, process.env.SECRET);
    // User.findOne({
    //   where: {
    //     id: decoded.id
    //   }
    // })
    //   .then(response => {
    //     if (response) {
    //       next();
    //       return null;
    //     } else {
    //       console.log("here");
    //       res.status(500).json();
    //     }
    //   })
    //   .catch(err => {
    //     next(err);
    //   });
    if (decoded) {
      req.currentUserId = decoded.id;
      console.log(req.currentUserId, "dari authenticated");
      console.log("masuk kesini", decoded);

      User.findOne({
        where: {
          id: decoded.id
        }
      })
        .then(data => {
          // console.log("then");
          // next();
          if (data) {
            // console.log(data);
            next();
            return null;
          } else {
            res.status(500).json(err);
          }
        })
        .catch(err => {
          console.log("catch");
          res.status(500).json(err);
        });
    } else {
      console.log("here");
      res.status(400).json({
        msg: `Access token invalid`
      });
    }
  } catch (err) {
    res.status(404).json({
      msg: `Access token not found`
    });
  }
};
