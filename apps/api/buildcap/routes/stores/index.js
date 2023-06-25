"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeRoutes = void 0;
const get_by_admin_1 = require("./get-by-admin");
const create_1 = require("./create");
const delete_1 = require("./delete");
const get_one_1 = require("./get-one");
const update_1 = require("./update");
const signin_1 = require("./signin");
exports.storeRoutes = [
    get_one_1.getOneStoreRoute,
    get_by_admin_1.getStoresByAdminRoute,
    create_1.createStoreRoute,
    delete_1.deleteStoreRoute,
    update_1.updateStoreRoute,
    signin_1.signInRoute,
];
//# sourceMappingURL=index.js.map