import { RouteOptions } from 'fastify';
import { getStoresByAdminRoute } from './get-by-admin';

export const storeRoutes: RouteOptions[] = [getStoresByAdminRoute];
