const { prisma } = require('../lib/db');
const resolvers = {
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
  },

  // parent, arge are other arguments that get passes to resolvers automatically
  Mutation: {
    createUser(parent, args) {
      return prisma.user.create({
        data: args,
      });
    },
  },
};

module.exports = { resolvers };
