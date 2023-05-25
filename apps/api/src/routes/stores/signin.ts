import { RouteMethod } from '@partiaf/constant-definitions';
import { RouteOptions, FastifyRequest, FastifyReply } from 'fastify';
import { signin, verifyToken } from '@partiaf/business-logic';

export const signInRoute: RouteOptions = {
  method: RouteMethod.POST,
  url: '/stores/signin',
  // preHandler: verifyToken,
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { body } = request;
      const data = body as { id: string; password: string };
      const signedin: boolean = await signin(data);
      reply.status(200).send({ sign: signedin });
    } catch (err) {
      reply.status(500).send(err);
    }
  },
};
