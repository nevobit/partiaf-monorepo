import { getModel, Collection } from "@partiaf/constant-definitions";
import { Store, StoreSchemaMongo } from "@partiaf/entities";

export const getStoreById = async (id: string): Promise<Store> => {
  const model = getModel<Store>(Collection.STORES, StoreSchemaMongo);
  const store = (await model.findById(id)) as Store;
  if (store) return store;
  throw new Error("Store not found.");
};
