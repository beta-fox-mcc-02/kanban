const express = require ('express')
const router = express.Router()
const authentication = require ('../middlewares/authentication')
const ProjectController = require ('../controllers/projectController')

router.post('/', authentication, ProjectController.create)
router.post('/addCollaborator', authentication, ProjectController.addCollaborator)
router.get('/:id', authentication, ProjectController.getOne)
router.put('/:id', authentication, ProjectController.update)
router.delete('/:id', authentication, ProjectController.delete)
router.delete('/collaborator/:id', authentication, ProjectController.deleteCollaborator)

module.exports = router