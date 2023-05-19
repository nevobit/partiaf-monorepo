import { Result, Store } from '@partiaf/entities';
/**
 * Get all stores by admin id in the database.
 * @param id id of admin to get stores.
 * @returns A Promise that resolves with the a result of stores.
 */
export declare const getStoresByAdmin: (uuid: string) => Promise<Result<Store>>;
