const router = require('express').Router()
const org = require('../controllers/orgController')

router.post('/', org.choose)
router.get('/', org.readAll)
router.post('/creates', org.createOrg)
router.post('/invites', org.invite)

module.exports = router