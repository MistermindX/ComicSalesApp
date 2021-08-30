const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.post('/comics', controllers.createComic)
router.post('/sellers', controllers.createSeller)
router.get('/comics', controllers.findAllComicsBySeller)
router.get('/sellers', controllers.findSeller)
router.delete('/comics', controllers.deleteComic)
module.exports = router
