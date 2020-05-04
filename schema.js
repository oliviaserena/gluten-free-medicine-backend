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
    firstname: String,
    lastname: String
    bio: String
    photoUrl: String
    isMedicalProfessional: Boolean!
  }
  type Medication {
    name: String!,
    manufacturer: String!, 
    photoUrl: String,
    dosage: String,
    approved: Boolean!
  }
  type Comment {
    text: String!,
    approved: Boolean!,
    author: User!
  }
  type Mutation {
    addUser(username: String!, firstname: String!, lastname: String!, bio: String, photoUrl: String,isMedicalProfessional: Boolean! ): User
    updateUserMedicalQualifications(id: ID!, isMedicalProfessional: Boolean!): User
    updateUserBio(id: ID!, bio: String!): User
    addMedication( name: String!, manufacturer: String!, photoUrl: String, dosage: String, approved: Boolean!): Medication
  }
`;

module.exports = typeDefs;