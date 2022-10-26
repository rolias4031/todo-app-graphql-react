import { GraphQLInt8 } from 'graphql-type-ints';
import { prisma } from '../lib/db.js';

// * queries
const getAllUsers = async () => {
  return prisma.user.findMany();
};

const getUser = async (_, args) => {
  return prisma.user.findUnique({
    where: {
      email: args.email,
    },
  });
};

const getAllTodos = async () => {
  return prisma.todo.findMany();
};

const getTodo = async (_, args) => {
  return prisma.todo.findUnique({
    where: {
      id: args.id,
    },
  });
};

// * mutations
const createUser = async (_, args) => {
  return prisma.user.create({
    data: args,
  });
};

const editUser = async (_, args) => {
  const userExists = await prisma.user.findUnique({
    where: {
      email: args.email,
    },
  });
  if (!userExists) {
    throw new Error('not found');
  }
  return prisma.user.update({
    where: {
      email: args.email,
    },
    data: args,
  });
};

const createTodo = async (_, args) => {
  return prisma.todo.create({
    data: args,
  });
};

const editTodo = async (_, args) => {
  const todoExists = await prisma.todo.findUnique({
    where: {
      id: args.id,
    },
  });
  if (!todoExists) {
    throw new Error('not found');
  }
  return prisma.todo.update({
    where: {
      id: args.id,
    },
    data: args,
  });
};

const deleteTodo = async (_, args) => {
  const todo = await prisma.todo.findUnique({
    where: {
      id: args.id,
    },
  });
  if (!todo) {
    throw new Error('not found');
  }
  return prisma.todo.delete({
    where: {
      id: args.id,
    },
  });
};

export const resolvers = {
  GraphQLInt8,
  Query: {
    getAllUsers,
    getUser,
    getAllTodos,
    getTodo,
  },

  // parent, arge are other arguments that get passes to resolvers automatically
  Mutation: {
    createUser,
    editUser,
    createTodo,
    editTodo,
    deleteTodo,
  },
};
