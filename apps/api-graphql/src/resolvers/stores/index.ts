import { getStoreById } from '@partiaf/business-logic';
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
    getStoreById: async (parent: any, id: string, ctx: any) => {
      await verifyUserToken(ctx);
      console.log(id);
      const store = await getStoreById(id);
      console.log(store);
      if (store instanceof Error) {
        return new Error('Invalid credentials');
      }

      return store;
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
