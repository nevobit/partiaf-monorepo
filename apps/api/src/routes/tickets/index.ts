import { RouteOptions } from 'fastify';
import { getStoresByStoreRoute } from './get-by-store';
import { createTicketRoute } from './create';
import { updateTicketRoute } from './update';
import { deleteTicketRoute } from './delete';

export const ticketRoutes: RouteOptions[] = [
  createTicketRoute,
  getStoresByStoreRoute,
  updateTicketRoute,
  deleteTicketRoute
];
