import { createOrder, createOrderExternal, createStore, verifyToken } from '@partiaf/business-logic';
import { RouteMethod } from '@partiaf/constant-definitions';
import { Admin, CreateStoreDto } from '@partiaf/entities';
import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';

interface FastifyRequestAdmin extends FastifyRequest {
  admin?: Admin;
}

export const createOrderExternalRoute: RouteOptions = {
  method: RouteMethod.POST,
  url: '/create-order-external',
  // preHandler: verifyToken,
  handler: async (request: FastifyRequestAdmin, reply: FastifyReply) => {
    try {
      const { body } = request;
      
      const { price, email, time, date, ticket, amount, users } = body as any;
      const order = await createOrderExternal({ title: "Compra Partiaf", price, email,  time, date, ticket, amount, users });
      reply.status(201).send(order);
    } catch (err) {
      reply.status(500).send(err);
    }
  }
};
