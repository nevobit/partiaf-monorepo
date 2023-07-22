import { RouteOptions } from 'fastify';
import { getStoresByAdminRoute } from './get-by-admin';
import { createTicketRoute } from './create';

export const ticketRoutes: RouteOptions[] = [
  createTicketRoute
];
