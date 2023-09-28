import { updatePayment } from '@partiaf/business-logic';
import { RouteMethod } from '@partiaf/constant-definitions';
import { Admin } from '@partiaf/entities';
import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';

interface FastifyRequestAdmin extends FastifyRequest {
  admin?: Admin;
}

export const webhookRoute: RouteOptions = {
  method: RouteMethod.POST,
  url: '/webhook',
  // preHandler: verifyToken,
  handler: async (request: FastifyRequestAdmin, reply: FastifyReply) => {
    try {
      const { query } = request;
      const { payment } = query as {payment: any}
      await updatePayment(payment, '');
      reply.status(204).send('Payment updated successfully');
    } catch (err) {
      reply.status(500).send(err);
    }
  }
};
