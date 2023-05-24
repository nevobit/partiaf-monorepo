import { getStoreById } from '@partiaf/business-logic';
import { RouteMethod } from '@partiaf/constant-definitions';
import { FastifyRequest, RouteOptions } from 'fastify';

type Params = {
  uuid: string;
};

export const getOneStoreRoute: RouteOptions = {
  method: RouteMethod.GET,
  url: '/stores/:uuid',
  handler: async (request: FastifyRequest, reply) => {
    const { params } = request;
    const { uuid } = params as Params;
    try {
      const store = await getStoreById(uuid);
      reply.status(200).send(store);
    } catch (err) {
      if (err instanceof Error) {
        reply.status(500).send(err);
      }
    }
  },
};
