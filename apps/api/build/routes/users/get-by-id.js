"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsersRoute = void 0;
const business_logic_1 = require("@partiaf/business-logic");
exports.getAllUsersRoute = {
    method: "GET",
    url: "/users",
    handler: async (request, reply) => {
        try {
            const obj = await (0, business_logic_1.getAllUsers)();
            reply.status(200).send(obj);
        }
        catch (err) {
            if (err instanceof Error) {
                console.log(err);
                reply.status(500).send(err);
            }
        }
    },
};
//# sourceMappingURL=get-by-id.js.map