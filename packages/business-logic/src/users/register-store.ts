import { getModel, Collection } from '@partiaf/constant-definitions';
import { Store, StoreSchemaMongo, User, UsersSchemaMongo } from '@partiaf/entities';

interface Props {
  id: string;
  code: string;
}
export const registerStore = async ({id, code}: Props): Promise<User> => {
  const model = getModel<User>(Collection.USERS, UsersSchemaMongo);
  const modelStore = getModel<Store>(Collection.STORES, StoreSchemaMongo);

  const user = await model.findById(id).select('-password');
  const store = await modelStore.findOne({employe_code: code});

  if(!user){
    throw new Error('User not found')
  }

  if(!store){
    throw new Error('Store not found')
  }

  const exist = user.stores.find((s) => s == store.id)
  
  if(exist){
    throw new Error("Store registered")
  }
  
  user.stores = [...user.stores, store.id ]
  await user.save();
  
  return user;
};
