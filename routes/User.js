const express = require('express').Router()
const routes = express
const ControllerUser = require('../Controller/User')

routes.post('/login',ControllerUser.login)
routes.post('/logingoogle',ControllerUser.gSignIn)
routes.post('/register',ControllerUser.register)


module.exports = routes