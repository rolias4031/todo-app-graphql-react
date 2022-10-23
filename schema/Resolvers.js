const { prisma } = require('../lib/db');
const resolvers = {
  Query: {
    getAllUsers() {
      return prisma.user.findMany();
    },
  },

  // parent, arge are other arguments that get passes to resolvers automatically
  Mutation: {
    async createUser(parent, args) {
      return prisma.user.create({
        data: args,
      });
    },
  },
};

module.exports = { resolvers };
