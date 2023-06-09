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
    Tag: Tag
    userId: String
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Order {
    _id: ID
    products: [Product]
    purchaseDate: String
  }

  type Query {
    products(Tag: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
    sortedProduct(name: String!): [Product]
    tags: [Tag] 
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;

