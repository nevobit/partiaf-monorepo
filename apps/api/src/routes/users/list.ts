import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';
import { RouteMethod } from '@partiaf/constant-definitions';
import { getAllUsers, getStoresByAdmin, verifyToken } from '@partiaf/business-logic';
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


export const getAllUsersRoute: RouteOptions = {
  method: RouteMethod.GET,
  url: '/users',
  handler: async (request: FastifyRequestAdmin, reply: FastifyReply) => {
    try {
      const users = await getAllUsers();
      reply.status(200).send(users);
    } catch (err) {
      reply.status(500).send(err);
    }
  },
};
