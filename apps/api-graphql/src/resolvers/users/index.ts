import {
  getAllUsers,
  getUserById,
  registerStore,
  updateUser,
  verifyUserToken,
} from '@partiaf/business-logic';

interface Context {
  token: string;
}

interface ArgsType {
  id: string;
}

export default {
  Query: {
    getUserById: async (parent: any, {}, ctx: any) => {
      const { id } = (await verifyUserToken(ctx)) as { id: string };
      const user = await getUserById(id);
      if (user instanceof Error) {
        return new Error('Invalid credentials');
      }

      return user;
    },
    getOneUser: async (parent: any, { id }:ArgsType, ctx: any) => {
      await verifyUserToken(ctx);
      const user = await getUserById(id);
      if (user instanceof Error) {
        return new Error('Invalid credentials');
      }

      return user;
    },
    getAllUsers: async (parent: any, {}, ctx: any) => {
      const { id } = (await verifyUserToken(ctx)) as { id: string };
      const users = await getAllUsers(id);
      if (users instanceof Error) {
        return new Error('Invalid credentials');
      }

      return users;
    },
  },
  Mutation: {
    registerStore: async (parent: any, { code }: {code: string}, ctx: any) => {
      const { id } = await verifyUserToken(ctx) as { id: string };
      const user = await registerStore({id, code});
      if (user instanceof Error) {
        return new Error('Invalid credentials');
      }

      return user;
    },

    updateUser: async (parent: any, { data }: any, ctx: any) => {
      const { id } = await verifyUserToken(ctx) as { id: string };
      const user = await updateUser({id, ...data});
      if (user instanceof Error) {
        return new Error('Invalid credentials');
      }

      return user;
    },
  },
};
