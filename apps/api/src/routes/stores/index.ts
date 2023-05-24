import { RouteOptions } from 'fastify';
import { getStoresByAdminRoute } from './get-by-admin';
import { createStoreRoute } from './create';
import { deleteStoreRoute } from './delete';

export const storeRoutes: RouteOptions[] = [
  getStoresByAdminRoute,
  createStoreRoute,
  deleteStoreRoute,
];
