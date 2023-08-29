import { RouteMethod } from '@partiaf/constant-definitions';
import { RouteOptions, FastifyRequest, FastifyReply } from 'fastify';
import { verifyCode } from '@partiaf/business-logic';
import { UpdateAdminDto } from '@partiaf/entities';

export const verifyCodeAdminsRoute: RouteOptions = {
  method: RouteMethod.POST,
  url: '/admins/verify-code',
  schema: {
    body: {
      type: 'object',
      properties: {
        email: { type: 'string' },
        code: { type: 'number' }
      }, 
      required: ['email', 'code']
    },
    response: {
      200: {
        type: 'object',
        properties: {
          response: { type: 'boolean' }
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
      const { email, code } = body as { email: string; code: number };
      const response = await verifyCode({ email, code });
      reply.status(200).send(response);
    } catch (err) {
      reply.status(500).send(err);
    }
  },
};
