const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    getUserbyEmail(email: String!): User
    getUserbyId(id:ID!): User
    getUsers: [User]!
    getMedications: [Medication]!
    getMedicationbyId(id:ID!): Medication
    searchMedications(string: String!): [Medication]!
  }
  type User {
    id: ID!
    email: String!
    password: String!
    firstname: String!
    lastname: String!
    bio: String
    photoUrl: String
    isMedicalProfessional: Boolean!
  }
  type Medication {
    id: ID!
    name: String!
    manufacturer: String!
    photoUrl: String
    dosage: String
    approved: Boolean!
    statusNumber: Int
    isSoyFree: Boolean
    isLactoseFree: Boolean
    containsPotatoStarch: Boolean
    containsCornStarch: Boolean
    comments: [Comment]!
  }
  type Comment {
    id: ID!,
    text: String!,
    approved: Boolean!,
    posted_by: User!
  }
  type Mutation {
    addUser(email: String!, firstname: String!, lastname: String!, bio: String, photoUrl: String,isMedicalProfessional: Boolean!, input_pass: String!): User
    loginUser(email: String!, password: String!): Boolean
    updateUserMedicalQualifications(id: ID!, isMedicalProfessional: Boolean!): User
    updateUserBio(id: ID!, bio: String!): User
    addMedication(name: String!, manufacturer: String!, photoUrl: String, dosage: String, approved: Boolean!, statusNumber: Int!, isSoyFree: Boolean, isLactoseFree: Boolean, containsPotatoStarch: Boolean, containsCornStarch: Boolean): Medication
    addCommentToMedication(id: ID!, text: String!, author_id: ID!) : Medication
  }
`;

module.exports = typeDefs;