import { getModel, Collection } from '@partiaf/constant-definitions';
import { Store, StoreSchemaMongo, User, UsersSchemaMongo } from '@partiaf/entities';

export const getUserById = async (id: string): Promise<User> => {
  const model = getModel<User>(Collection.USERS, UsersSchemaMongo);
  getModel<Store>(Collection.STORES, StoreSchemaMongo);


  const user = await model.findById(id).select('-password').populate('stores') as any;
  return user;
};
