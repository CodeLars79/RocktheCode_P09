const mongoose = require('mongoose')

const funkoSchema = new mongoose.Schema(
  {
    img: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: false }
  },
  {
    timestamps: true,
    collection: 'funkos'
  }
)

const Funko = mongoose.model('funkos', funkoSchema)
module.exports = Funko
