import 'dotenv/config';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { initDataSources } from '@partiaf/data-sources';
import typeDefs from '../typedefs';
import resolvers from '../resolvers';
import * as admin from "firebase-admin";
import { initializeApp,applicationDefault } from 'firebase-admin/app';
import { sendMessage } from '../resolvers/notification';
var serviceAccount = require("../service-account-key.json");

const { PORT, MONGODB_URL } = process.env;

console.log("[server]: Initializing Firebase Admin SDK...");
export const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: 'partiaf-776e2',
  // storageBucket: process.env.FILES_BUCKET,
});

interface ApiContext {
  token?: string;
}

const main = async () => {
  await initDataSources({
    mongoose: {
      mongoUrl: MONGODB_URL,
    },
  });

  // await sendMessage();
  const server = new ApolloServer<any>({ resolvers, typeDefs });
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => ({ req }),
    listen: { port: Number(PORT) | 8001 },
  });
  console.log(`server listening on ${url}`);
};

void main();
