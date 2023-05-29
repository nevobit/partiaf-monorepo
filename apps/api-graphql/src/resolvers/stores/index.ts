import {
  getAllStores,
  getAllUsers,
  getUserById,
  verifyUserToken,
} from '@partiaf/business-logic';

interface Context {
  token: string;
}

export default {
  Query: {
    getStoreById: async (parent: any, {}, ctx: any) => {
      const { id } = (await verifyUserToken(ctx)) as { id: string };
      const user = await getUserById(id);
      if (user instanceof Error) {
        return new Error('Invalid credentials');
      }

      return user;
    },
    getAllStores: async (parent: any, {}, ctx: any) => {
      (await verifyUserToken(ctx)) as { id: string };
      const stores = await getAllStores(1, 1000);

      console.log(stores);
      if (stores instanceof Error) {
        return new Error('Stores not found');
      }

      return stores.items;
    },
  },
};
