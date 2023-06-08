const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const db = require('../models');

async function seedDB() {
  // Connect to MongoDB
  mongoose.connect('mongodb://127.0.0.1:27017/thriftstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Delete all existing data
  await Promise.all([
    db.User.deleteMany({}),
    db.Product.deleteMany({}),
    db.Tag.deleteMany({}),
    db.Order.deleteMany({}),
  ]);

  // Create some users
  const users = await db.User.create([
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      password: await bcrypt.hash('password', 10),
    },
    {
      firstName: 'Jane',
      lastName: 'Doe',
      email: 'jane@example.com',
      password: await bcrypt.hash('password', 10),
    },
  ]);

  // Create some tags
  const tags = await db.Tag.create([
    {
      name: "Toys"
    },
    {
      name: "Electronics"
    },
    {
      name: "Clothing"
    },
    {
      name: "Kitchen"
    },
    {
      name: "Outdoor"
    }
  ]);

  // Create some products, associated with users and tags
  const products = await db.Product.create([
    {
      name: 'The Great Book',
      description: 'A really great book',
      image: '/path/to/image',
      price: 19.99,
      userId: users[1]._id,
      productId: '1',
      Tag: tags[0],
    },
    {
      name: 'Super Cool Gadget',
      description: 'A really cool gadget',
      image: '/path/to/image',
      price: 99.99,
      userId: users[0]._id,
      productId: '2',
      Tag: tags[1]._id,
    },
  ]);

  // Create some orders, associated with products
  const orders = await db.Order.create([
    {
      products: [products[0]._id],
    },
    {
      products: [products[1]._id],
    },
  ]);

  // Link orders to the users who made them
  users[0].orders.push(orders[1]);
  users[1].orders.push(orders[0]);
  await users[0].save();
  await users[1].save();

  console.log('DB seeded!');
}

seedDB().catch(console.error);
