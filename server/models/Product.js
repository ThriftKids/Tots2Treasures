const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },

  productId: {
    type: String,
    required: true,
    default: Schema.Types.ObjectId,
  },

  Tag: {
    type: Schema.Types.ObjectId,
    ref: 'Tag',
    required: true
  },
  userId: {
    type: String,
    required: true,
    default: Schema.Types.ObjectId,
    ref: 'User'
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
