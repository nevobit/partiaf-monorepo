import { createOrder, createStore, verifyToken } from '@partiaf/business-logic';
import { RouteMethod } from '@partiaf/constant-definitions';
import { Admin, CreateStoreDto } from '@partiaf/entities';
import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';

interface FastifyRequestAdmin extends FastifyRequest {
  admin?: Admin;
}

export const createOrderRoute: RouteOptions = {
  method: RouteMethod.POST,
  url: '/create-order',
  // preHandler: verifyToken,
  handler: async (request: FastifyRequestAdmin, reply: FastifyReply) => {
    try {
      const { body } = request;
      
      const { price } = body as any;
      const order = await createOrder({ title: "Recarga Partiaf", price });
      reply.status(201).send(order);
    } catch (err) {
      reply.status(500).send(err);
    }
  }
};
