"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStoresByAdmin = void 0;
const entities_1 = require("@partiaf/entities");
const constant_definitions_1 = require("@partiaf/constant-definitions");
/**
 * Get all stores by admin id in the database.
 * @param id id of admin to get stores.
 * @returns A Promise that resolves with the a result of stores.
 */
const getStoresByAdmin = async (uuid) => {
    const model = (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.STORES, entities_1.StoreSchemaMongo);
    const stores = await model.find({ admin: uuid });
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
};
exports.getStoresByAdmin = getStoresByAdmin;
//# sourceMappingURL=get-by-admin.js.map