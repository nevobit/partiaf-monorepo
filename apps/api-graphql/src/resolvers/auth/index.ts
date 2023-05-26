import { User } from '@partiaf/entities';

interface Context {
  token: string;
}

export default {
  Mutation: {
    userSignin: (parent: User, arg: User, ctx: Context) => {},
  },
};
