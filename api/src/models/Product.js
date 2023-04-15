const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
    unique: true
  },
  img: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  inStock: {
    type: Number,
    default: 0
  },
  category: {
    type: String,
    required: true
  }
}, {
  timestamps: false,
  versionKey: false
});

module.exports = mongoose.model('Product', ProductSchema);
