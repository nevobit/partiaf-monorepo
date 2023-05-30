import auth from './auth';
import stores from './stores';
import users from './users';

export default {
  Query: {
    ...users.Query,
    ...stores.Query,
  },
  Mutation: {
    ...auth.Mutation,
  },
};
