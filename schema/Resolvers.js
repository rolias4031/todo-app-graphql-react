import { prisma } from '../lib/db.js';
export const resolvers = {
  Query: {
    getAllUsers() {
      return prisma.user.findMany();
    },
    getUser(parent, args) {
      return prisma.user.findUnique({
        where: {
          email: args.email,
        },
      });
    },
    getAllTodos() {
      return prisma.todo.findMany();
    },
    getTodo(parent, args) {
      return prisma.todo.findUnique({
        where: {
          id: args.id,
        },
      });
    },
  },

  // parent, arge are other arguments that get passes to resolvers automatically
  Mutation: {
    createUser(parent, args) {
      return prisma.user.create({
        data: args,
      });
    },
    createTodo(parent, args) {
      return prisma.todo.create({
        data: args,
      });
    },
  },
};
