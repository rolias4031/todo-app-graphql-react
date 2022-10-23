const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    name: String!,
    email: String!,
    age: Int!,
    verified: Boolean!
  }

  type Todo {
    title: String!,
    description: String!
  }

  type Query {
    getAllUsers: [User]
    getUser(email: String!): User
  }

  type Mutation {
    createUser(name: String!, email: String!, age: Int!): User
  }

`;

module.exports = { typeDefs };
