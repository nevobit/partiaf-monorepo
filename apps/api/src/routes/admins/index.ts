import { RouteOptions } from 'fastify';
import { registerAdminsRoute } from './register';
import { generateCodeAdminsRoute } from './generate-code';

export const adminRoutes: RouteOptions[] = [
  registerAdminsRoute,
  generateCodeAdminsRoute,
];
