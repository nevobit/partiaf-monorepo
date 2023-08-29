
import { RouteOptions } from 'fastify';
import { registerAdminsRoute } from './register';
import { generateCodeAdminsRoute } from './generate-code';
import { verifyCodeAdminsRoute } from './verify-code';
import { updateAdminsRoute } from './update';
import { getAdminByIdRoute } from './get-one';

export const adminRoutes: RouteOptions[] = [
  registerAdminsRoute,
  generateCodeAdminsRoute,
  verifyCodeAdminsRoute,
  updateAdminsRoute,
  getAdminByIdRoute
];
