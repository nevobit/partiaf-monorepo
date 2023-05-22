import { FastifyInstance, RouteOptions } from 'fastify';
import { healthCheckRoute } from './health-check';
import { storeRoutes } from './stores';

const routes: RouteOptions[] = [healthCheckRoute, ...storeRoutes];

export const registerRoutes = (server: FastifyInstance) => {
  server.log.warn('Registering routes');

  routes.map(route => {
    server.route(route);
  });
};
