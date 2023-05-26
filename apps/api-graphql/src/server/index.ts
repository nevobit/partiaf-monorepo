import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import { initDataSources } from '@partiaf/data-sources';
import typeDefs from '../typedefs';
import resolvers from '../resolvers';
import {
  ApolloServerPluginLandingPageGraphQLPlayground,
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from 'apollo-server-core';

const { PORT, MONGODB_URL, NODE_ENV } = process.env;

const main = async () => {
  await initDataSources({
    mongoose: {
      mongoUrl: MONGODB_URL,
    },
  });

  const server = new ApolloServer({
    cors: true,
    resolvers,
    typeDefs,
    context: async ({ req }) => ({ user: req.headers.user }),
    plugins: [
      NODE_ENV == 'production'
        ? ApolloServerPluginLandingPageProductionDefault
        : ApolloServerPluginLandingPageGraphQLPlayground,
    ],
  });

  server.listen(PORT, async () => {
    console.log(`server listening on port ${PORT}`);
  });
};

void main();
