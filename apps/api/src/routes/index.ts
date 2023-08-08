import { FastifyInstance, RouteOptions } from 'fastify';
import { healthCheckRoute } from './health-check';
import { storeRoutes } from './stores';
import { adminRoutes } from './admins';
import { authRoutes } from './auth';
import { ticketRoutes } from './tickets';
import { paymentsRoutes } from './payments';
import { goersRoutes } from './goers';

const routes: RouteOptions[] = [
  healthCheckRoute,
  ...authRoutes,
  ...storeRoutes,
  ...adminRoutes,
  ...ticketRoutes,
  ...paymentsRoutes,
  ...goersRoutes
];

export const registerRoutes = (server: FastifyInstance) => {
  server.log.warn('Registering routes');

  routes.map(route => {
    server.route(route);
  });
};
