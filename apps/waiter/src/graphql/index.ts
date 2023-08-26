import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';

const httpLink = createHttpLink({
  uri: 'https://partiaf-api-graphql.xyz/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
