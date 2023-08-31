import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';
import { RouteMethod } from '@partiaf/constant-definitions';
import { getAllTicketsByStore, getGoersByTicket, verifyToken } from '@partiaf/business-logic';
import { StatusType } from '@partiaf/entities/build';

interface Params {
  ticket: string;
}
interface Query {
  page: number;
  limit: number;
  store: string;
  status: StatusType;
}

export const getGoersByTicketRoute: RouteOptions = {
  method: RouteMethod.GET,
  url: '/goers/:ticket',
  //preHandler: verifyToken,
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { params } = request;
      const { ticket } = params as Params;

      console.log({ticket})
      const goers = await getGoersByTicket(ticket);
      reply.status(200).send(goers);
    } catch (err) {
      reply.status(500).send(err);
    }
  },
};
