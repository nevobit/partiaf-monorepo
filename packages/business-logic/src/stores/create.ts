import { CreateStoreDto, Store, StoreSchemaMongo } from '@partiaf/entities';
import { Collection, getModel } from '@partiaf/constant-definitions';
import bcrypt from 'bcrypt';

export const createStore = async (
  data: Partial<CreateStoreDto>
): Promise<CreateStoreDto | Error> => {
  const model = getModel<Store>(Collection.STORES, StoreSchemaMongo);

  const store = new model(data);
  const salt = bcrypt.genSaltSync(10);
  store.password = bcrypt.hashSync(data.password!, salt);

  await store.save();

  return store;
};
