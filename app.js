const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./schema/TypeDefs');
const { resolvers } = require('./schema/Resolvers');



const express = require('express');
const app = express();

let server;
async function startServer() {
  server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });
}

startServer();

app.listen({ port: 3001 }, () => {
  console.log('Server running on port 3001');
});
