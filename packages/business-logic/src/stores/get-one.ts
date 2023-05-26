import { getModel, Collection } from '@partiaf/constant-definitions';
import { Store, StoreSchemaMongo } from '@partiaf/entities';

export const getStoreById = async (uuid: string): Promise<Store> => {
  const model = getModel<Store>(Collection.STORES, StoreSchemaMongo);

  const store = (await model.findById(uuid)) as Store;
  return store;
};
