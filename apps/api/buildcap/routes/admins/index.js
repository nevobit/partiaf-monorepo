"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRoutes = void 0;
const register_1 = require("./register");
const generate_code_1 = require("./generate-code");
const verify_code_1 = require("./verify-code");
const update_1 = require("./update");
exports.adminRoutes = [
    register_1.registerAdminsRoute,
    generate_code_1.generateCodeAdminsRoute,
    verify_code_1.verifyCodeAdminsRoute,
    update_1.updateAdminsRoute,
];
//# sourceMappingURL=index.js.map