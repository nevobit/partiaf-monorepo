import { generateUsersCode, getAdminById, verifyToken } from '@partiaf/business-logic';
import { FastifyRequest, RouteOptions } from 'fastify';


export const generateRoute: RouteOptions = {
 method: 'GET',
 url: "/users/codes",
 handler: async (request, reply) => {
   try {
     const adminInfo = await generateUsersCode("");
  
     reply.status(200).send(adminInfo);
   } catch (err) {
     if (err instanceof Error) {
       reply.status(500).send(err);
     }
   }
 },
};