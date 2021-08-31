const mongoose = require('mongoose')
const SellerSchema = require('./Seller')
const ComicSchema = require('./Comic')

const Seller = mongoose.model('sellers', SellerSchema)
const Comic = mongoose.model('comics', ComicSchema)

module.exports = {
  Seller,
  Comic
}
