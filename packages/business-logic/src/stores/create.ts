import { CreateStoreDto, Store, StoreSchemaMongo } from "@partiaf/entities";
import { Collection, getModel } from "@partiaf/constant-definitions";

export const createStore = async (
    data: Partial<CreateStoreDto>
): Promise<CreateStoreDto | Error> => {
    const model = getModel<Store>(Collection.STORES, StoreSchemaMongo);

    const store = new model(data);

    await store.save();

    return store;
};