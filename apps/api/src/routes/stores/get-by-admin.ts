import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';
import { RouteMethod } from '@partiaf/constant-definitions';
import { getStoresByAdmin, verifyToken } from '@partiaf/business-logic';
import { StatusType } from '@partiaf/entities/build';

interface Params {
  admin: string;
}
interface Query {
  page: number;
  limit: number;
  status: StatusType;
}

export const getStoresByAdminRoute: RouteOptions = {
  method: RouteMethod.GET,
  url: '/stores/:admin',
  //preHandler: verifyToken,
  schema: {
    params: {
      type: 'object',
      properties: {
        admin: { type: 'string' }
      },
      required: ['admin']
    },
    querystring: {
      type: 'object',
      properties: {
        page: { type: 'number' },
        limit: { type: 'number' },
        status: { type: 'string', enum: Object.values(StatusType) }
      }
    },
    response: {
      200: {
        type: 'object',
        properties: {
          count: { type: 'number' },
          items: {
            type: 'array',
            items: {
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
            }
          },
          pageInfo: {
            type: 'object',
            properties: {
              page: { type: 'number' },
              pages: { type: 'number' },
              hasNextPage: { type: 'boolean' },
              hasPreviousPage: { type: 'boolean' },
              nextPage: { type: 'number' },
              previousPage: { type: 'number' }
            }
          }
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
      const { params } = request;
      const { admin } = params as Params;
      const { query } = request;
      const { page, limit, status } = query as Query;

      const stores = await getStoresByAdmin(admin, page, limit, status);
      reply.status(200).send(stores);
    } catch (err) {
      reply.status(500).send(err);
    }
  },
};
