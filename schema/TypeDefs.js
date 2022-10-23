const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    name: String!,
    age: Int!,
    verified: Boolean!
  }

  type Todo {
    title: String!,
    description: String!
  }

  type Query {
    getAllUsers: [User]

    getUser: User
  }

  type Mutation {
    createUser(name: String!, age: Int!): User
  }

`;

module.exports = { typeDefs };
