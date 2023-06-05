// import { verifyToken } from '@partiaf/business-logic';
import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';
import { RouteMethod } from '@partiaf/constant-definitions';
import { deleteStore } from '@partiaf/business-logic';

type Params = {
  uuid: string;
};

export const deleteStoreRoute: RouteOptions = {
  method: RouteMethod.DELETE,
  url: '/stores/:uuid',
  // preHandler: verifyToken,
  schema: {
    params: {
      type: 'object',
      properties: {
        uuid: { type: 'string' }
      },
      required: ['uuid']
    },
    response: {
      200: {
        type: 'boolean',
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
    const { params } = request;
    const { uuid } = params as Params;
    try {
      const deleted = await deleteStore(uuid);
      reply.send(deleted);
    } catch (err) {
      if (err instanceof Error) {
        reply.send(500).send(err.message);
      }
    }
  },
};
