const router = require('express').Router()
const org = require('../controllers/orgController')

router.post('/', org.choose)
router.get('/', org.readAll)
router.post('/creates', org.createOrg)
router.get('/invites', org.check)

module.exports = router