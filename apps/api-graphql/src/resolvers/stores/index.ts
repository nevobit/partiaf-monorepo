import { getAllStores, getStoreById, verifyUserToken } from '@partiaf/business-logic';

interface Context {
  token: string;
}

interface ArgsType {
  id: string;
}

export default {
  Query: {
    getStoreById: async (parent: any, { id }: ArgsType, ctx: any) => {
      await verifyUserToken(ctx);
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
