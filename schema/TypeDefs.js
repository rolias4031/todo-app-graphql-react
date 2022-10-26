/* eslint-disable no-unused-vars */
import { GraphQLInt8 } from 'graphql-type-ints';

export const typeDefs = `#graphql

  scalar GraphQLInt8

  type User {
    id: GraphQLInt8!
    name: String!
    email: String!
    age: Int!
    verified: Boolean!
  }

  type Todo {
    id: GraphQLInt8!
    title: String!
    description: String!
    due_date: String
  }

  type Query {
    # users queries
    getAllUsers: [User]
    getUser(email: String!): User

    # todo queries
    getAllTodos: [Todo]
    getTodo(id: Int!): Todo
  }

  type Mutation {
    # user
    createUser(name: String!, email: String!, age: Int!): User
    editUser(name: String, email: String!, age: Int): User
    deleteUser(email: String!): User

    # todo
    createTodo(title: String!, description: String!, due_date: String): Todo
    editTodo(id: Int, title: String, description: String): Todo
    deleteTodo(id: Int!): Todo
  }
`;
