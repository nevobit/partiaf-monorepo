import { RouteOptions } from 'fastify';
import { createOrderExternalRoute } from './create-order';
import { webhookExternalRoute } from './update';

export const paymentsRoutes: RouteOptions[] = [
  createOrderExternalRoute,
  webhookExternalRoute
];
