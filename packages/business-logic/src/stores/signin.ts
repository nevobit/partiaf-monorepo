import { getModel, Collection } from '@partiaf/constant-definitions';
import { Store, StoreSchemaMongo, UpdateStoreDto } from '@partiaf/entities';
import bcrypt from 'bcrypt';

export const signin = async ({ id, password }: UpdateStoreDto) => {
  const model = getModel<Store>(Collection.STORES, StoreSchemaMongo);

  const store = await model.findById(id);

  if (!store) throw new Error('Store not found.');

  const isValidPassword: boolean = await bcrypt.compare(
    password!,
    store.password
  );

  return isValidPassword;
};
