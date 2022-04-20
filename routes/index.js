const { Router } = require('express');
const controllers = require('../controllers')
const router = Router();

router.get('/', (req, res) => res.send('This is the root!'))
router.post('/details', controllers.createDetail)
router.get('/details', controllers.getDetails)
router.get('/details/:id', controllers.getDetailById)
router.put('/details/:id', controllers.updateDetail)
router.delete('/details/:id', controllers.deleteDetail)

module.exports = router;