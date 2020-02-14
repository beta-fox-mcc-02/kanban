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
router.get('/users', UserController.allUser)
router.post('/gLogin', UserController.gLogin)

router.use(authentication)
router.get('/user', UserController.getOneUser)
router.get('/organization', OrganizationController.getOrganizations)
router.post('/organization', OrganizationController.newOrganization)
router.get('/organization/:orgId', authorization, OrganizationController.getOneOrganization)
router.put('/organization/:orgId', authorization, OrganizationController.updateOrganization)
router.delete('/organization/:orgId', authorization, OrganizationController.deleteOrganization)
router.post('/organization/:orgId/add/:username', authorization, OrganizationController.addMember)
router.post('/organization/:orgId/task', authorization, TaskController.newTask)
router.get('/organization/:orgId/task/:taskId', authorization, TaskController.getOneTask)
router.put('/organization/:orgId/task/:taskId', authorization, TaskController.updateTask)
router.patch('/organization/:orgId/task/:taskId', authorization, TaskController.updateCategoryTask)
router.delete('/organization/:orgId/task/:taskId', authorization, TaskController.deleteTask)
router.post('/organization/:orgId/task/:taskId/:userId', authorization, TaskController.assignMemberToTask)
router.delete('/organization/:orgId/task/:taskId/:userId', authorization, TaskController.removeMemberFromTask)



module.exports = router