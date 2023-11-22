import { RouteOptions } from 'fastify';
import { createOrderExternalRoute } from './create-order';
import { webhookExternalRoute } from './update';

export const paymentsExternalRoutes: RouteOptions[] = [
  createOrderExternalRoute,
  webhookExternalRoute
];
