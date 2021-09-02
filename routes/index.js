const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.post('/sellers', controllers.createSeller)
router.get('/sellers/:id', controllers.findSellerById)
router.get('/sellers/login/:name', controllers.findSellerByName)
router.get('/sellers', controllers.findAllSellers)
router.delete('/sellers/:id', controllers.deleteSeller)

router.post('/comics', controllers.createComic)
router.get('/comics', controllers.findAllComics)
router.get('/comics/seller/:id', controllers.findAllComicsBySeller)
router.get('/comics/:id', controllers.findComicById)
router.delete('/comics/:id', controllers.deleteComic)
module.exports = router
