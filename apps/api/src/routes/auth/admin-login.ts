import { RouteMethod } from '@partiaf/constant-definitions';
import { RouteOptions, FastifyRequest, FastifyReply } from 'fastify';
import { login, verifyToken } from '@partiaf/business-logic';

export const loginRoute: RouteOptions = {
  method: RouteMethod.POST,
  url: '/admins/login',
  preHandler: verifyToken,
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { body } = request;
      const data = body as { username: string; password: string };
      const admin = await login(data);
      reply.status(201).send(admin);
    } catch (err) {
      reply.status(500).send(err);
    }
  },
};
