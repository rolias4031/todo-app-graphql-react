const { prisma } = require('../lib/db');
const resolvers = {
  Query: {
    getAllUsers() {
      return prisma.user.findMany();
    },
  },
};

module.exports = { resolvers };
