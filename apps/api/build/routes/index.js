"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const health_check_1 = require("./health-check");
const admins_1 = require("./admins");
const stores_1 = require("./stores");
const covers_1 = require("./covers");
const goers_1 = require("./goers");
const users_1 = require("./users");
const waiters_1 = require("./waiters");
const routes = [
    health_check_1.healthCheckRoute,
    ...admins_1.adminsRoutes,
    ...stores_1.storeRoutes,
    ...covers_1.coverRoutes,
    ...goers_1.goersRoutes,
    ...users_1.usersRoutes,
    ...waiters_1.waitersRoutes,
];
const registerRoutes = (fastify) => {
    fastify.log.warn("Registering routes", routes);
    routes.map((route) => {
        fastify.route(route);
    });
};
exports.registerRoutes = registerRoutes;
//# sourceMappingURL=index.js.map