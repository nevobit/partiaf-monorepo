import { Result, StatusType, Store, StoreSchemaMongo } from '@partiaf/entities';
import { getModel, Collection } from '@partiaf/constant-definitions';

interface Query {
  status: StatusType;
  search?: string;
}

/**
 * Get all stores by admin id in the database with pagination and optional status filter.
 * @param page page number.
 * @param limit number of items per page.
 * @returns A Promise that resolves with a result of stores by page.
 */

export const getAllStores = async (
  page: number,
  limit: number
): Promise<Result<Store>> => {
  const model = getModel<Store>(Collection.STORES, StoreSchemaMongo);

  const query: Query = { status: StatusType.ACTIVE };

  const actualPage = +page || 1;
  const pageSize = +limit || 15;
  const skip = (actualPage - 1) * pageSize;

  const count = await model.countDocuments({
    $and: [{ status: StatusType.ACTIVE }],
  });

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
