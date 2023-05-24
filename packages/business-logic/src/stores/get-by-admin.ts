import { Result, StatusType, Store, StoreSchemaMongo } from '@partiaf/entities';
import { getModel, Collection } from '@partiaf/constant-definitions';

/**
 * Get all stores by admin id in the database with pagination and optional status filter.
 * @param uuid id of admin to get stores.
 * @param page page number.
 * @param limit number of items per page.
 * @param status status type to filter stores (optional).
 * @returns A Promise that resolves with a result of stores.
 */
export const getStoresByAdmin = async (
  uuid: string,
  page: number,
  limit: number,
  status?: StatusType
): Promise<Result<Store>> => {
  const model = getModel<Store>(Collection.STORES, StoreSchemaMongo);

  const actualPage = +page || 1;
  const pageSize = +limit || 15;
  const skip = (actualPage - 1) * pageSize;

  const query: { admin: string; status?: StatusType } = { admin: uuid };

  if (status) {
    query.status = status;
  }

  const count = await model.countDocuments(query);

  const stores = await model.find(query).skip(skip).limit(pageSize);

  const pages = Math.ceil(count / pageSize);

  const hasPreviousPage = actualPage > 1;
  const previousPage = hasPreviousPage ? actualPage - 1 : actualPage;
  const hasNextPage = actualPage < pages;
  const nextPage = hasNextPage ? actualPage + 1 : actualPage;

  return {
    count,
    items: stores,
    pageInfo: {
      page: actualPage,
      pages,
      hasNextPage,
      hasPreviousPage,
      nextPage,
      previousPage,
    },
  };
};
