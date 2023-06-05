const Tag = require('../models/Tag');

const tagsSeeder = async () => {
  try {
    // Define the tags data
    const tags = [
      { name: 'Toys' },
      { name: 'Clothes' },
      { name: 'Electronics' },
      { name: 'Outdoor' },
      // Add more tag objects as needed
    ];

    // Insert the tags into the database
    await Tag.insertMany(tags);
    console.log('Tags seeded successfully!');
  } catch (error) {
    console.error('Error seeding tags:', error);
  }
};

module.exports = tagsSeeder;
