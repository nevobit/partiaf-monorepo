import { RouteOptions } from 'fastify';
import { getStoresByAdminRoute } from './get-by-admin';
import { createStoreRoute } from './create';
import { deleteStoreRoute } from './delete';
import { updateStoreRoute } from './update';
import { signInRoute } from './signin';
import { getStoreByIdRoute } from './get-one';

export const storeRoutes: RouteOptions[] = [
  getStoreByIdRoute,
  getStoresByAdminRoute,
  createStoreRoute,
  deleteStoreRoute,
  updateStoreRoute,
  signInRoute,
];
