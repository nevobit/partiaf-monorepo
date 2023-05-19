import { Store } from "./schemas/store";
export type CreateStoreDto = Omit<Store, '_id'>;
export type UpdateStoreDto = Partial<Store>;
