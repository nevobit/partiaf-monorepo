import { RouteOptions } from 'fastify';
import { getStoresByStoreRoute } from './get-by-store';
import { createTicketRoute } from './create';

export const ticketRoutes: RouteOptions[] = [
  createTicketRoute,
  getStoresByStoreRoute
];
