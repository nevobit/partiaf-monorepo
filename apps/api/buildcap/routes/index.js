"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const health_check_1 = require("./health-check");
const stores_1 = require("./stores");
const admins_1 = require("./admins");
const auth_1 = require("./auth");
const routes = [
    health_check_1.healthCheckRoute,
    ...auth_1.authRoutes,
    ...stores_1.storeRoutes,
    ...admins_1.adminRoutes,
];
const registerRoutes = (server) => {
    server.log.warn('Registering routes');
    routes.map(route => {
        server.route(route);
    });
};
exports.registerRoutes = registerRoutes;
//# sourceMappingURL=index.js.map