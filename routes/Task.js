const express = require('express').Router()
const routes = express
const ControllerTask = require('../Controller/Task')
const authorized = require('../Middlewares/Authorized')
const authentication = require('../Middlewares/Authentication')

routes.use(authentication)
routes.get('/',ControllerTask.findAll)
routes.post('/add',ControllerTask.add)
routes.get('/:id',authorized,ControllerTask.findOne)
routes.put('/:id',authorized,ControllerTask.edit)
routes.delete('/:id',authorized,ControllerTask.delete)

module.exports = routes