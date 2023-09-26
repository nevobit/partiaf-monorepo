import { User, UsersSchemaMongo } from '@partiaf/entities';
import { Collection, getModel } from '@partiaf/constant-definitions';

export const deleteUser = async (uuid: String): Promise<Boolean | Error> => {
  const model = getModel<User>(Collection.USERS, UsersSchemaMongo);
  const user = await model.findById(uuid);
  if (!user) {
    throw new Error('602');
  }
  await user.deleteOne();
  return true;
};
