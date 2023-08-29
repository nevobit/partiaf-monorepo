import { RouteMethod } from '@partiaf/constant-definitions';
import { RouteOptions, FastifyRequest, FastifyReply } from 'fastify';
import { signin, verifyToken } from '@partiaf/business-logic';

export const signInRoute: RouteOptions = {
  method: RouteMethod.POST,
  url: '/stores/signin',
  // preHandler: verifyToken,
  schema: {
    body: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        password: { type: 'string' }
      },
      required: ['id', 'password']
    },
    response: {
      200: {
        type: 'object',
        properties: {
          sign: { type: 'boolean' }
        }
      },
      500: {
        type: 'object',
        properties: {
          statusCode: { type: 'number' },
          error: { type: 'string' },
          message: { type: 'string' },
        }
      }
    }
  },
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { body } = request;
      const data = body as { id: string; password: string };
      const signedin: boolean = await signin(data);
      reply.status(200).send(signedin);
    } catch (err) {
      reply.status(500).send(err);
    }
  },
};
