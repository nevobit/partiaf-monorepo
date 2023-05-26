import { RouteOptions } from 'fastify';
import { getStoresByAdminRoute } from './get-by-admin';
import { createStoreRoute } from './create';
import { deleteStoreRoute } from './delete';
import { getOneStoreRoute } from './get-one';
import { updateStoreRoute } from './update';
import { signInRoute } from './signin';

export const storeRoutes: RouteOptions[] = [
  getOneStoreRoute,
  getStoresByAdminRoute,
  createStoreRoute,
  deleteStoreRoute,
  updateStoreRoute,
  signInRoute,
];
