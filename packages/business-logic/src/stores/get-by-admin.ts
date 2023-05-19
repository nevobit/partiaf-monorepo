import { Result, Store, StoreSchemaMongo } from '@partiaf/entities';
import { getModel, Collection } from '@partiaf/constant-definitions';

/**
 * Get all stores by admin id in the database.
 * @param id id of admin to get stores.
 * @returns A Promise that resolves with the a result of stores.
 */
export const getStoresByAdmin = async (uuid: string): Promise<Result<Store>> => {
 const model = getModel<Store>(Collection.STORES, StoreSchemaMongo);
 
 const stores = await model.find({admin: uuid});
 const count = await stores.length;
 
 return {
  count,
  items: stores,
  pageInfo: {
   page: 1,
    pages: 1,
    hasNextPage: false,
    hasPreviousPage: false,
    nextPage: 1,
    previousPage: 1
  }
 };
} 
