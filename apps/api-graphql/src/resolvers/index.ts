import auth from './auth';
import stores from './stores';
import users from './users';
import tickets from './tickets';
import goers from './goers';

export default {
  Query: {
    ...users.Query,
    ...stores.Query,
    ...tickets.Query,
    ...goers.Query
  },
  Mutation: {
    ...auth.Mutation,
    ...goers.Mutation
  },
};
