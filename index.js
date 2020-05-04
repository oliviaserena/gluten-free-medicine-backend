const cors = require('cors');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./schema');

const app = express();

app.use(cors());

let users = {
  1: {
    id: '1',
    username: 'Olivia Graham',
  },
  2: {
    id: '2',
    username: 'Jack Swisher',
  },
};

const me = users[1];

const resolvers = {
  Query: {
    users: () => {
      return Object.values(users);
    },
    user: (parent, { id }) => {
      return users[id];
    },
    me: (parent, args, { me }) => {
      return me;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    me: users[1],
  },
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});