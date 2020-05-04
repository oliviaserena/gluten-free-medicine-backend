const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    users: [User!]
    me: User
    user(id: ID!): User
  }
  type User {
    id: ID!
    username: String!
  }
`;

module.exports = typeDefs;