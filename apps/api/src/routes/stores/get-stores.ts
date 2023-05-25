import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';
import { RouteMethod } from '@partiaf/constant-definitions';
import { getAllStores, verifyToken } from '@partiaf/business-logic';

interface Query {
  page: number;
  limit: number;
}

export const getAllStoresRoute: RouteOptions = {
  method: RouteMethod.GET,
  url: '/stores',
  // preHandler: verifyToken,
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { query } = request;
      const { page, limit } = query as Query;

      const stores = await getAllStores(page, limit);
      reply.status(200).send(stores);
    } catch (err) {
      reply.status(500).send(err);
    }
  },
};
