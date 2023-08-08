import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import { NetworkInfo } from 'react-native-network-info';

const httpLink = createHttpLink({
  uri: 'http://192.168.1.3:8001/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
