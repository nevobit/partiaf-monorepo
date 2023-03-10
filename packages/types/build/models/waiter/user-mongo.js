"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WaiterSchemaMongo = void 0;
const mongoose_1 = require("mongoose");
exports.WaiterSchemaMongo = new mongoose_1.Schema({
    uuid: { type: String },
    firstname: { type: String },
    lastname: { type: String },
    username: { type: String },
    email: { type: String },
    code: { type: Number },
    last_login: { type: Date, default: Date.now() },
    admin: { type: String },
    store: { type: String },
}, {
    versionKey: false,
    timestamps: true
});
//# sourceMappingURL=user-mongo.js.map