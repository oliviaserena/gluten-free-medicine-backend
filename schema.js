const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    getUser(username: String!): User
    getUsers: [User!]
  }
  type User {
    id: ID!
    username: String!
  }
  type Mutation {
    addUser(username: String!): User
  }
`;

module.exports = typeDefs;