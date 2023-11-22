import { Collection, getModel } from '@partiaf/constant-definitions';
import { User, UsersSchemaMongo } from '@partiaf/entities';

export const verifyPhone = async (phone: string): Promise<Boolean | Error> => {
  const model = getModel<User>(Collection.USERS, UsersSchemaMongo);

  const user = await model.findOne({ phone: phone })
  console.log(user)
  if(user) {
    return true;
  }

  return false;
};
