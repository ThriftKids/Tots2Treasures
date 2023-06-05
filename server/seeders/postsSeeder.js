const Post = require('../models/Post');
const User = require('../models/User');
const Product = require('../models/Product');

const postsSeeder = async () => {
  try {
    // Retrieve the users and products from the database
    const users = await User.find();
    const products = await Product.find();

    // Define the posts data
    const posts = [
      {
        purchaseDate: new Date(),
        postId: '1',
        user: users[0], // Assign a user from the retrieved users
        products: products.slice(0, 2), // Assign a subset of products from the retrieved products
        // Add any other required attributes for the Post model
      },
      {
        purchaseDate: new Date(),
        postId: '2',
        user: users[1], // Assign a user from the retrieved users
        products: products.slice(2, 4), // Assign a subset of products from the retrieved products
        // Add any other required attributes for the Post model
      },
      // Add more post objects as needed
    ];

    // Insert the posts into the database
    await Post.insertMany(posts);
    console.log('Posts seeded successfully!');
  } catch (error) {
    console.error('Error seeding posts:', error);
  }
};

module.exports = postsSeeder;
