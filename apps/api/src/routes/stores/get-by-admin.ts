import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';
import { RouteMethod } from '@partiaf/constant-definitions';
import { getStoresByAdmin, verifyToken } from '@partiaf/business-logic';
import { StatusType } from '@partiaf/entities/build';

interface Params {
  admin: string;
}
interface Query {
  page: number;
  limit: number;
  status: StatusType;
}

export const getStoresByAdminRoute: RouteOptions = {
  method: RouteMethod.GET,
  url: '/stores/:admin',
  // preHandler: verifyToken,
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { params } = request;
      const { admin } = params as Params;
      const { query } = request;
      const { page, limit, status } = query as Query;

      const stores = await getStoresByAdmin(admin, page, limit, status);
      reply.status(200).send(stores);
    } catch (err) {
      reply.status(500).send(err);
    }
  },
};
