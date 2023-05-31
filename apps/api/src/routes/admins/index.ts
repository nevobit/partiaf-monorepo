import { RouteOptions } from 'fastify';
import { registerAdminsRoute } from './register';
import { generateCodeAdminsRoute } from './generate-code';
import { verifyCodeAdminsRoute } from './verify-code';
import { updateAdminsRoute } from './update';

export const adminRoutes: RouteOptions[] = [
  registerAdminsRoute,
  generateCodeAdminsRoute,
  verifyCodeAdminsRoute,
  updateAdminsRoute,
];
