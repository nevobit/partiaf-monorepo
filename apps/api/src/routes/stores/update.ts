import { updateStore, verifyToken } from '@partiaf/business-logic';
import { RouteMethod } from '@partiaf/constant-definitions';
import { UpdateStoreDto } from '@partiaf/entities';
import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';

export const updateStoreRoute: RouteOptions = {
  method: RouteMethod.PUT,
  url: '/stores',
  // preHandler: verifyToken,
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { body } = request;
      const data = body as UpdateStoreDto;
      const store = await updateStore(data);
      reply.status(200).send(store);
    } catch (err) {
      reply.status(500).send(err);
    }
  },
};
