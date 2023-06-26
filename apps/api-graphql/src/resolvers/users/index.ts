import {
  getAllUsers,
  getUserById,
  verifyUserToken,
} from '@partiaf/business-logic';

interface Context {
  token: string;
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
    getAllUsers: async (parent: any, {}, ctx: any) => {
      const { id } = (await verifyUserToken(ctx)) as { id: string };
      const users = await getAllUsers(id);
      
      console.log(users);
      if (users instanceof Error) {
        return new Error('Invalid credentials');
      }

      return users;
    },
  },
};
