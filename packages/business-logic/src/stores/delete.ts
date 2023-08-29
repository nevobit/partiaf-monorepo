import { Store, StoreSchemaMongo } from '@partiaf/entities';
import { Collection, getModel } from '@partiaf/constant-definitions';

export const deleteStore = async (uuid: String): Promise<Boolean | Error> => {
  const model = getModel<Store>(Collection.STORES, StoreSchemaMongo);
  const store = await model.findById(uuid);
  if (!store) {
    throw new Error('602');
  }
  await store.deleteOne();
  return true;
};
