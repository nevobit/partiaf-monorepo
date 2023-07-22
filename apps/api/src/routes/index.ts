import { FastifyInstance, RouteOptions } from 'fastify';
import { healthCheckRoute } from './health-check';
import { storeRoutes } from './stores';
import { adminRoutes } from './admins';
import { authRoutes } from './auth';
import { ticketRoutes } from './tickets';

const routes: RouteOptions[] = [
  healthCheckRoute,
  ...authRoutes,
  ...storeRoutes,
  ...adminRoutes,
  ...ticketRoutes
];

export const registerRoutes = (server: FastifyInstance) => {
  server.log.warn('Registering routes');

  routes.map(route => {
    server.route(route);
  });
};
