export const typeDefs = `
  type User {
    name: String!
    email: String!
    age: Int!
    verified: Boolean!
  }

  type Todo {
    title: String!
    description: String!
  }

  type Query {
    # users queries
    getAllUsers: [User]
    getUser(email: String!): User
    # todo queries
    getAllTodos: [Todo]
    getTodo(id: String!): Todo
  }

  type Mutation {
    createUser(name: String!, email: String!, age: Int!): User
    createTodo(title: String!, description: String!): Todo
  }
`;