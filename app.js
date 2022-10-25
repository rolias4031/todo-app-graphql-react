import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema/TypeDefs.js';
import { resolvers } from './schema/Resolvers.js';

const app = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(app, {
  listen: { port: 3001 },
});

console.log(`Serving running at ${url}`);
