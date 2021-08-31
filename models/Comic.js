const { Schema } = require('mongoose')

const Comic = new Schema(
  {
    title: { type: String, required: true },
    grade: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: Number, required: true },
    seller_id: { type: Schema.Types.ObjectId, ref: 'seller_id' }
  },
  { timestamps: true }
)

module.exports = Comic
