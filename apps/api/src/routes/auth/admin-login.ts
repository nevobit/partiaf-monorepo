import { RouteMethod } from '@partiaf/constant-definitions';
import { RouteOptions, FastifyRequest, FastifyReply } from 'fastify';
import { login } from '@partiaf/business-logic';

export const loginRoute: RouteOptions = {
  method: RouteMethod.POST,
  url: '/login',
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { body } = request;
      const data = body as { email: string; password: string; code: number };
      const admin = await login(data);
      reply.status(200).send(admin);
    } catch (err) {
      reply.status(500).send(err);
    }
  },
};
