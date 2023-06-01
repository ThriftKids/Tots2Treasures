const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Tag {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    productId: String
    name: String
    description: String
    image: String
    price: Float
    tag: Tag
    purchaseDate: String
    userId: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    products: [Product]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

`;

module.exports = typeDefs;
