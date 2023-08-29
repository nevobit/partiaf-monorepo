import { updateStore, verifyToken } from '@partiaf/business-logic';
import { RouteMethod } from '@partiaf/constant-definitions';
import { UpdateStoreDto } from '@partiaf/entities';
import { FastifyReply, FastifyRequest, RouteOptions } from 'fastify';

export const updateStoreRoute: RouteOptions = {
  method: RouteMethod.PUT,
  url: '/stores',
  // preHandler: verifyToken,
  schema: {
    body: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        description: { type: 'string' },
        type: { type: 'string' },
        nit: { type: 'string', description: 'Must be unique' },
        email: { type: 'string', description: 'Must be unique' },
        password: { type: 'string', minLength: 5 },
        phone: { type: 'number', description: 'Must be unique' },
        location: {
          type: 'object',
          properties: {
            lat: { type: 'number' },
            lng: { type: 'number' }
          }
        },
        limit: { type: 'number' },
        photos: {
          type: 'array',
          items: { type: 'string' }
        },
        employes: { type: 'number' },
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
        admin: { type: 'string' },
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
      },
      required: ['id']
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
          password: { type: 'string', minLength: 5 },
          phone: { type: 'number' },
          location: {
            type: 'object',
            properties: {
              lat: { type: 'number' },
              lng: { type: 'number' }
            }
          },
          limit: { type: 'number' },
          photos: {
            type: 'array',
            items: { type: 'string' }
          },
          employes: { type: 'number' },
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
          admin: { type: 'string' },
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
              },
              createdAt: { type: 'string', format: 'date' },
              updatedAt: { type: 'string', format: 'date' },
              id: { type: 'string' }
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
    }
  },
  handler: async (request: FastifyRequest, reply: FastifyReply) => {
    try {
      const { body } = request;
      const data = body as UpdateStoreDto;
      const store = await updateStore(data);
      reply.status(200).send(store);
    } catch (err) {
      reply.status(500).send(err);
    }
  },
};
