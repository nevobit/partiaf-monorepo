import { RouteOptions } from 'fastify';
import { createOrderRoute } from './create-order';

export const paymentsRoutes: RouteOptions[] = [
  createOrderRoute
];
