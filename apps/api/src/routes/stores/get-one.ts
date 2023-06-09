import { getStoreById } from '@partiaf/business-logic';
import { RouteMethod } from '@partiaf/constant-definitions';
import { FastifyRequest, RouteOptions } from 'fastify';

type Params = {
  uuid: string;
};

export const getOneStoreRoute: RouteOptions = {
  method: RouteMethod.GET,
  url: '/store/:uuid',
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
        type: 'object',
        properties: {
                name: { type: 'string' },
                description: { type: 'string' },
                type: { type: 'string' },
                nit: { type: 'string' },
                email: { type: 'string' },
                password: { type: 'string' },
                phone: { type: 'number' },
                location: {
                  type: 'object',
                  properties: {
                    _id: { type: 'string' }
                  }
                },
                limit: { type: 'number' },
                photos: {
                  type: 'array',
                  items: { type: 'string' }
                },
                employes: { type: 'number' },
                status: { type: 'string' },
                last_login: { type: 'string' },
                balance: { type: 'number' },
                chairs: { type: 'number' },
                tables: { type: 'number' },
                max_per_table: { type: 'number' },
                min_per_table: { type: 'number' },
                chairs_per_table: { type: 'number' },
                website: { type: 'string' },
                facebook: { type: 'string' },
                instagram: { type: 'string' },
                tiktok: { type: 'string' },
                youtube: { type: 'string' },
                employe_code: { type: 'number' },
                organizer: { type: 'string' },
                min_age: { type: 'number' },
                specialties: {
                  type: 'object',
                  properties: {
                    music: {
                      type: 'array',
                      items: { type: 'string' }
                    },
                    plan: {
                      type: 'array',
                      items: { type: 'string' }
                    },
                    food: {
                      type: 'array',
                      items: { type: 'string' }
                    }
                  }
                },
                createdAt: { type: 'string', format: 'date-time' },
                updatedAt: { type: 'string', format: 'date-time' },
                id: { type: 'string' }
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
