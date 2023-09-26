import auth from './auth';
import stores from './stores';
import users from './users';
import tickets from './tickets';
import goers from './goers';
import follows from './follows';
import friendRequests from './friend-requests';

export default {
  Query: {
    ...users.Query,
    ...stores.Query,
    ...tickets.Query,
    ...goers.Query,
    ...follows.Query,
    ...friendRequests.Query
  },
  Mutation: {
    ...auth.Mutation,
    ...goers.Mutation,
    ...users.Mutation,
    ...follows.Mutation,
    ...friendRequests.Mutation
  },
};
