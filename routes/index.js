const express = require('express').Router()
const routes = express
const User = require('./User')
const Task = require('./Task')

routes.use(User)
routes.use(Task)


module.exports = routes