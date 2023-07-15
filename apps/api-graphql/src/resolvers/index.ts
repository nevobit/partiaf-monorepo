import auth from './auth';
import stores from './stores';
import users from './users';
import tickets from './tickets';

export default {
  Query: {
    ...users.Query,
    ...stores.Query,
    ...tickets.Query
  },
  Mutation: {
    ...auth.Mutation,
  },
};
