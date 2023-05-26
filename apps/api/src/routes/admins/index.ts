import { RouteOptions } from 'fastify';
import { registerAdminsRoute } from './register';

export const adminRoutes: RouteOptions[] = [registerAdminsRoute];
