const mongoose = require('mongoose');

const { Schema } = mongoose;

const postSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
