import { getModel, Collection } from '@partiaf/constant-definitions';
import { User, UsersSchemaMongo } from '@partiaf/entities';

export const getUserById = async (id: string): Promise<User> => {
  const model = getModel<User>(Collection.USERS, UsersSchemaMongo);

  const user = (await model.findById(id).select('-password')) as User;
  return user;
};
