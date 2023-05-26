"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStore = void 0;
const tslib_1 = require("tslib");
const entities_1 = require("@partiaf/entities");
const constant_definitions_1 = require("@partiaf/constant-definitions");
const bcrypt_1 = tslib_1.__importDefault(require("bcrypt"));
const createStore = async (data) => {
    const model = (0, constant_definitions_1.getModel)(constant_definitions_1.Collection.STORES, entities_1.StoreSchemaMongo);
    const store = new model(data);
    const salt = bcrypt_1.default.genSaltSync(10);
    store.password = bcrypt_1.default.hashSync(data.password, salt);
    await store.save();
    return store;
};
exports.createStore = createStore;
//# sourceMappingURL=create.js.map