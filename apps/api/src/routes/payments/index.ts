import { RouteOptions } from 'fastify';
import { createOrderRoute } from './create-order';
import { webhookRoute } from './update';

export const paymentsRoutes: RouteOptions[] = [
  createOrderRoute,
  webhookRoute
];
