const express = require('express');
const path = require('path');
const db = require('./config/connection');

const { ApolloServer } = require('apollo-server-express');

const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');

const app = express();
const PORT = process.env.PORT || 3001;


const server = new ApolloServer({
  typeDefs, // Your GraphQL type definitions
  resolvers, // Your GraphQL resolvers
  context: authMiddleware, // Your authentication middleware
});


server.start().then(() => {
  server.applyMiddleware({ app });
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
});