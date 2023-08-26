import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import { NetworkInfo } from 'react-native-network-info';

const httpLink = createHttpLink({
  // uri: 'http://192.168.1.62:8001/graphql',
  uri: 'https://partiaf-api-graphql.xyz/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
