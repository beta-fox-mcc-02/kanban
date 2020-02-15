const { User } = require('../models')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const { Project } = require('../models')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

class UserController {
   static register(req, res, next) {
      let newUser = {
         name: req.body.name,
         email: req.body.email,
         password: req.body.password
      }
      User.create(newUser)
         .then(data => {
            res.status(201).json(data)
         })
         .catch(err => {
            next(err)
         })
   }

   static login(req, res, next) {
      User.findOne({
         where: {
            email: req.body.email
         }
      })
         .then(data => {
            if (!data) {
               next({ code: 404, message: `email / password is wrong` })
            }
            else {
               let verified = bcrypt.compareSync(req.body.password, data.password);
               if (!verified) {
                  next({ code: 404, message: `email / password is wrong` })
               }
               else {
                  var token = jwt.sign({ id: data.id }, process.env.SECRET);
                  res.status(200).json({ token, id: data.id, msg: `login successfully` })
               }
            }
         })
         .catch(err => {
            next(err)
         })
   }

   static gSignIn(req, res, next) {
      
      let name
      let email
      client.verifyIdToken({
         idToken: req.body.token,
         audience: process.env.CLIENT_ID
      })
         .then(data => {
            name = data.payload.name
            email = data.payload.email

            return User.findOne({
               where: {
                  email: email
               }
            })
         })
         .then(user => {
            console.log(user);

            if (!user) {
               let newUser = {
                  name,
                  email,
                  password: process.env.SECRET_PASSWORD
               }

               return User.create(newUser)
            }
            else {
               return user
            }
         })
         .then(logUser => {
            const token = jwt.sign({ id: logUser.id }, process.env.SECRET);
            res.status(200).json({ token, id: logUser.id })
         })
         .catch(err => { 
                       
            next(err)
         })
   }

   static getAll(req, res, next) {
      User.findAll()
         .then(data => {
            let results = []
            for (let i = 0; i <= data.length - 1; i++) {
               let temp = {
                  id: data[i].id,
                  name: data[i].name,
                  email: data[i].email
               }
               results.push(temp)
            }
            res.status(200).json(results)
         })
         .catch(err => {
            next(err)
         })
   }

   static getProject(req, res, next) {
      User.findOne({
         where: {
            id: req.currentUserId
         },
         include: {
            model: Project
         }
      })
         .then(data => {
            res.status(200).json(data.Projects)
         })
         .catch(err => {
            next(err)
         })
   }
}

module.exports = UserController