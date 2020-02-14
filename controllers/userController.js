const { User } = require("../models");
const {Project} = require('../models')
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.CLIENT_ID);

class userController {
  static project(req, res, next) {
    console.log("controller");
    let pk = req.currentUserId;

    User.findOne({
      include: [Project],
      where: {
        id: pk
      }
    })
      .then(data => {
        console.log(data.Projects);
        res.status(200).json(data.Projects);
      })
      .catch(next);
  }

  static register(req, res, next) {
    // console.log(req.body, 'ini dari body');

    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
      .then(data => {
        // console.log(data.id, 'dari atas');
        let token = jwt.sign({ id: data.id }, process.env.SECRET);
        // console.log(token, 'token');
        let name = data.name;
        // console.log(name, 'ini data');
        res.status(200).json({ token, name });
      })
      .catch(next);
  }

  static login(req, res, next) {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(data => {
        if (data) {
          var dehash = bcrypt.compareSync(req.body.password, data.password);
          if (dehash) {
            let token = jwt.sign({ id: data.id }, process.env.SECRET);
            let name = data.name;
            res.status(200).json({ token, name });
          } else {
            res.status(500).json("wrong password/email");
          }
        } else {
          res.status(500).json("wrong password/email");
        }
      })
      .catch(next);
  }

  static gSignin(req, res, next) {
    // console.log('masuk', req.body.id_token);
    let payload;
    client
      .verifyIdToken({
        idToken: req.body.id_token,
        audience: process.env.CLIENT_ID
      })
      .then(ticket => {
        payload = ticket.getPayload();

        return User.findOne({
          where: {
            email: payload.email
          }
        });
      })
      .then(userData => {
        if (!userData) {
          // console.log(payload);
          return User.create({
            name: payload.name,
            email: payload.email,
            password: process.env.PWD
          });
        } else {
          return userData;
        }
      })
      .then(user => {
        console.log(user);

        const token = jwt.sign({ id: user.id }, process.env.SECRET);
        const name = user.name;
        // const pic = payload.picture
        res.status(200).json({ token, name });
      })
      .catch(err => {
        console.log(err.message);
        // Wrong recipient, payload audience != requiredAudience
        res.status(500).json(err);
      });
  }
}

module.exports = userController;
