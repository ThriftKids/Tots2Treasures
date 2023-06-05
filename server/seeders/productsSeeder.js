const Product = require('../models/Product');
const Tag = require('../models/Tag');

const productsSeeder = async () => {
  try {
    // Retrieve the tags from the database
    const tags = await Tag.find();

    // Define the products data
    const products = [
      {
        name: 'Product 1',
        description: 'Description of product 1',
        image: 'path/to/product1.jpg',
        price: 9.99,
        tag: tags[0], // Assign a tag from the retrieved tags
        // Add any other required attributes for the Product model
      },
      {
        name: 'Product 2',
        description: 'Description of product 2',
        image: 'path/to/product2.jpg',
        price: 19.99,
        tag: tags[1], // Assign a tag from the retrieved tags
        // Add any other required attributes for the Product model
      },
      // Add more product objects as needed
    ];

    // Insert the products into the database
    await Product.insertMany(products);
    console.log('Products seeded successfully!');
  } catch (error) {
    console.error('Error seeding products:', error);
  }
};

module.exports = productsSeeder;
