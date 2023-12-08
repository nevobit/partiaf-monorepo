import { RouteOptions } from 'fastify';
import { getAllUsersRoute } from './list';

export const usersRoutes: RouteOptions[] = [
  getAllUsersRoute,
];
