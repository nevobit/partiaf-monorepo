import {  createTicket, verifyToken } from '@partiaf/business-logic';
import { RouteMethod } from '@partiaf/constant-definitions';
import { Admin, CreateTicketDto } from '@partiaf/entities';
import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';

interface FastifyRequestAdmin extends FastifyRequest {
  admin?: Admin;
}

export const createTicketRoute: RouteOptions = {
  method: RouteMethod.POST,
  url: '/tickets',
  // preHandler: verifyToken,
  handler: async (request: FastifyRequestAdmin, reply: FastifyReply) => {
    try {
      const { body } = request;
      const data = body as CreateTicketDto;
      const ticket = await createTicket(data);
      reply.status(201).send(ticket);
    } catch (err) {
      reply.status(500).send(err);
    }
  }
};
