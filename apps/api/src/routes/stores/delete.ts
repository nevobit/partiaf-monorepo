import { verifyToken } from '@partiaf/business-logic';
import { Admin } from '@partiaf/entities';
import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';

interface FastifyRequestAdmin extends FastifyRequest {
  admin?: Admin;
}

export const deleteStoreRoute: RouteOptions = {
  method: 'DELETE',
  url: '/stores/:id',
  preHandler: verifyToken,
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      reply.status(204).send();
    } catch (err) {
      reply.status(500).send(err);
    }
  },
};
