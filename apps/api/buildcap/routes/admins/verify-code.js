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
exports.verifyCodeAdminsRoute = void 0;
const constant_definitions_1 = require("@partiaf/constant-definitions");
const business_logic_1 = require("@partiaf/business-logic");
exports.verifyCodeAdminsRoute = {
    method: constant_definitions_1.RouteMethod.POST,
    url: '/admins/verify-code',
    handler: (request, reply) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { body } = request;
            const { email, code } = body;
            const response = yield (0, business_logic_1.verifyCode)({ email, code });
            reply.status(200).send(response);
        }
        catch (err) {
            reply.status(500).send(err);
        }
    }),
};
//# sourceMappingURL=verify-code.js.map