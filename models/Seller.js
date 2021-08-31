const { Schema } = require('mongoose')

const Seller = new Schema(
  {
    name: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Seller
