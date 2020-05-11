const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    getUserbyName(username: String!): User
    getUserbyId(id:ID): User
    getUsers: [User!]
    getMedications: [Medication!]
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
    id: ID!
    name: String!,
    manufacturer: String!, 
    photoUrl: String,
    dosage: String,
    approved: Boolean!
    comments: [Comment]
  }
  type Comment {
    id: ID!,
    text: String!,
    approved: Boolean!,
    author_id: String!
  }
  type Mutation {
    addUser(username: String!, firstname: String!, lastname: String!, bio: String, photoUrl: String,isMedicalProfessional: Boolean! ): User
    updateUserMedicalQualifications(id: ID!, isMedicalProfessional: Boolean!): User
    updateUserBio(id: ID!, bio: String!): User
    addMedication( name: String!, manufacturer: String!, photoUrl: String, dosage: String, approved: Boolean!): Medication
    addCommentToDrug(id: ID!, text: String!, author_id: String!) : Medication
  }
`;

module.exports = typeDefs;