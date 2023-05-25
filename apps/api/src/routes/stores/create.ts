import { createStore, verifyToken } from '@partiaf/business-logic';
import { RouteMethod } from '@partiaf/constant-definitions';
import { Admin, CreateStoreDto } from '@partiaf/entities';
import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';

interface FastifyRequestAdmin extends FastifyRequest {
  admin?: Admin;
}

export const createStoreRoute: RouteOptions = {
  method: RouteMethod.POST,
  url: '/stores',
  // preHandler: verifyToken,
  handler: async (request: FastifyRequestAdmin, reply: FastifyReply) => {
    try {
      const { body } = request;
      const data = body as CreateStoreDto;
      const { admin } = request;
      const store = await createStore({ ...data, admin: admin?.uuid });
      reply.status(201).send(store);
    } catch (err) {
      reply.status(500).send(err);
    }
  },
};
