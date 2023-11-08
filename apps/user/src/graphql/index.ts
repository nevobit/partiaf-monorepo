import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';

const httpLink = createHttpLink({
  // uri: 'http://192.168.43.107:8001/graphql',
  uri: 'https://partiaf-api-graphql.xyz/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
