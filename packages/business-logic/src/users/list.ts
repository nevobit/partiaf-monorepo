import { getModel, Collection } from '@partiaf/constant-definitions';
import { User, UsersSchemaMongo } from '@partiaf/entities';

export const getAllUsers = async (id: string): Promise<User[]> => {
  const model = getModel<User>(Collection.USERS, UsersSchemaMongo);
  let query = {};

  if (id) {
    query = { _id: { $ne: id } };
  }

  const user = await model.find(query).select('-password').lean();
  return user;
};
