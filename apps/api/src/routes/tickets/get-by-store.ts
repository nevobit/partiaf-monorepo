import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';
import { RouteMethod } from '@partiaf/constant-definitions';
import { getAllTicketsByStore, verifyToken } from '@partiaf/business-logic';
import { StatusType } from '@partiaf/entities/build';

interface Params {
  store: string;
}
interface Query {
  page: number;
  limit: number;
  store: string;
  status: StatusType;
}

export const getStoresByStoreRoute: RouteOptions = {
  method: RouteMethod.GET,
  url: '/tickets/:store',
  //preHandler: verifyToken,
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { params } = request;
      const { store } = params as Params;
      const { query } = request;
      const { page, limit } = query as Query;

      const stores = await getAllTicketsByStore(page, limit, store);
      reply.status(200).send(stores);
    } catch (err) {
      reply.status(500).send(err);
    }
  },
};
