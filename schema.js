const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    getUserbyName(username: String!): User
    getUserbyId(id:ID): User
    getUsers: [User!]
  }
  type User {
    id: ID!
    username: String!
    bio: String
    photoUrl: String
    isMedicalProfessional: Boolean!
  }
  type Mutation {
    addUser(username: String!, bio: String, photoUrl: String,isMedicalProfessional: Boolean! ): User
    updateMedicalQualifications(id: ID!, isMedicalProfessional: Boolean!): User
    updateUserBio(id: ID!, bio: String!): User
  }
`;

module.exports = typeDefs;