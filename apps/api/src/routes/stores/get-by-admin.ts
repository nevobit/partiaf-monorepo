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
interface FastifyRequestAdmin extends FastifyRequest {
  admin?:any;
}


export const getStoresByAdminRoute: RouteOptions = {
  method: RouteMethod.GET,
  url: '/stores',
  preHandler: verifyToken,
  handler: async (request: FastifyRequestAdmin, reply: FastifyReply) => {
    try {
      const { admin } = request;
      const { query } = request;
      const { page, limit, status } = query as Query;

      const stores = await getStoresByAdmin(admin.id, page, limit, status);
      reply.status(200).send(stores);
    } catch (err) {
      reply.status(500).send(err);
    }
  },
};
