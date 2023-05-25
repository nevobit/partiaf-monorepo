import { UpdateStoreDto, Store, StoreSchemaMongo } from '@partiaf/entities';
import { Collection, getModel } from '@partiaf/constant-definitions';

export const updateStore = async (data: UpdateStoreDto) => {
  const model = getModel<Store>(Collection.STORES, StoreSchemaMongo);
  const store = await model.findById(data.id);
  if (!store) throw new Error(`Store doesn't exist`);
  const updatedStore = await model.findByIdAndUpdate(data.id, data, {
    new: true,
  });
  if (!updatedStore) throw new Error(`Store not found`);
  return updatedStore;
};
