import { getAdminById, verifyToken } from '@partiaf/business-logic';
import { FastifyRequest, RouteOptions } from 'fastify';

interface FastifyRequestAdmin extends FastifyRequest {
  admin?:any;
}

export const getAdminByIdRoute: RouteOptions = {
 method: 'GET',
 url: "/admin",
 preHandler: verifyToken,
 handler: async (request: FastifyRequestAdmin, reply) => {
   try {
    const { admin } = request;     
     const adminInfo = await getAdminById(admin.id);
     reply.status(200).send(adminInfo);
   } catch (err) {
     if (err instanceof Error) {
       reply.status(500).send(err);
     }
   }
 },
};