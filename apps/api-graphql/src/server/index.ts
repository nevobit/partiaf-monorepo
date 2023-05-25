import 'dotenv/config';
import { ApolloServer } from 'apollo-server';
import { initDataSources } from '@partiaf/data-sources';
import typeDefs from '../typedefs';
import resolvers from '../resolvers';

const { PORT, MONGODB_URL } = process.env;

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
  });

  server.listen(PORT, async () => {
    console.log(`server listening on port ${PORT}`);
  });
};

void main();
