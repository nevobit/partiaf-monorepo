import { RouteOptions } from 'fastify';
import { loginRoute } from './admin-login';

export const authRoutes: RouteOptions[] = [loginRoute];