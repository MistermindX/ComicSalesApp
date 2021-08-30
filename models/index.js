const mongoose = require('mongoose')
const SellerSchema = require('./seller')
const ComicSchema = require('./comic')

const Seller = mongoose.model('sellers', SellerSchema)
const Comic = mongoose.model('comics', ComicSchema)

module.exports = {
  Seller,
  Comic
}
