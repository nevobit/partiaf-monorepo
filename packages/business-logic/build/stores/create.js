"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStore = void 0;
const entities_1 = require("@partiaf/entities");
const constant_definitions_1 = require("@partiaf/constant-definitions");
const createStore = async (data) => {
    const model = (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.STORES, entities_1.StoreSchemaMongo);
    const store = new model(data);
    await store.save();
    return store;
};
exports.createStore = createStore;
//# sourceMappingURL=create.js.map