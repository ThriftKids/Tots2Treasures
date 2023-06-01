const User = require('../models/User');

const usersSeeder = async () => {
  try {
    // Define the users data
    const users = [
      {
        firstName: 'Jacob',
        lastName: 'MacDonald',
        email: 'Jacob@example.com',
        password: 'password123',
        // Add any other required attributes for the User model
      },
      {
        firstName: 'Jackson',
        lastName: 'Rainbird-Kendrick',
        email: 'Jackson@example.com',
        password: 'password456',
        // Add any other required attributes for the User model
      },
      // Add more user objects as needed
    ];

    // Insert the users into the database
    await User.insertMany(users);
    console.log('Users seeded successfully!');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

module.exports = usersSeeder;
