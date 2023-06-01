# Tots2Treasures - Online Marketplace for Kids' Clothes and Toys

Tots2Treasures is an online marketplace where users can post and sell gently used children's clothes and toys. It provides a platform for parents and caregivers to find affordable, high-quality items for their children while also allowing sellers to declutter and earn some extra money by selling items that their own children have outgrown.

## Features

- **User Registration and Authentication**: Users can create accounts and log in to the website to access all the features, including posting items for sale and making purchases.

- **Item Listing and Search**: Sellers can easily create listings for the clothes and toys they want to sell. Buyers can search for specific items, filter by category, and browse through available listings.

- **Secure Payment Integration**: Buyers can securely make payments for their purchases using a payment gateway integrated into the website.

- **User Profiles**: Users have profiles where they can view their listings, track their purchase history, and view their shopping carts. 

## Getting Started

To run the Tots2Treasures website locally, follow these steps:

1. Clone the repository:
git clone https://github.com/ThriftKids/Tots2Treasures.git

2. Install dependencies:
cd Tots2Treasures
npm install

3. Set up the database:
- Rename the `.env.example` file to `.env` and update the database connection details.

4. Run database migrations:
npx sequelize-cli db:migrate

5. Start the server:
npm start

6. Open your web browser and navigate to `http://localhost:3000` to access the Tots2Treasures website.

## Technologies Used

- Front-end: HTML, CSS, JavaScript, React
- Back-end: Node.js, Express.js
- Database: Sequelize ORM
- Payment Integration: Stripe

## Contributing

Contributions to the Children's Closet project are welcome! If you would like to contribute, please follow these steps:

1. Fork the repository and create your branch:
git checkout -b feature/your-feature-name

2. Make your changes and commit them:
git commit -m "Your commit message"

3. Push your changes to your branch:
git push origin feature/your-feature-name

4. Open a pull request on GitHub, and provide a clear description of your changes and the motivation behind them.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or suggestions, please feel free to reach out to us:

- Email: info@Tots2Treasures.com

We appreciate your interest in Tots2Treasures and welcome your feedback!
