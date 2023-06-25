"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.healthCheckRoute = void 0;
// @ts-ignore
const package_json_1 = require("../../../package.json");
exports.healthCheckRoute = {
    method: 'GET',
    url: '/health-check',
    handler: () => __awaiter(void 0, void 0, void 0, function* () {
        return {
            appName: `${package_json_1.name} Partiaf`,
            appVersion: package_json_1.version,
            status: 'ok',
            uptime: process.uptime(),
        };
    }),
};
//# sourceMappingURL=index.js.map