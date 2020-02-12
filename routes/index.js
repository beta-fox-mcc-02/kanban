const router = require('express').Router()
const MainController = require('../controllers/index')
const UserController = require('../controllers/userController')
const OrganizationController = require('../controllers/organizationController')
const TaskController = require('../controllers/taskController')
const authentication = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

router.get('/unsplashRandom', MainController.testUnsplash)

router.post('/login', UserController.login)
router.post('/register', UserController.register)

router.use(authentication)
router.get('/organization', OrganizationController.getOrganizations)
router.post('/organization', OrganizationController.newOrganization)
router.get('/organization/:orgId', authorization, OrganizationController.getOneOrganization)
router.put('/organization/:orgId', authorization, OrganizationController.updateOrganization)
router.delete('/organization/:orgId', authorization, OrganizationController.deleteOrganization)
router.post('/organization/:orgId/add/:username', authorization, OrganizationController.addMember)
router.post('/organization/:orgId/task', authorization, TaskController.newTask)
router.get('/organization/:orgId/task/:taskId', authorization, TaskController.getOneTask)


module.exports = router